
import { NextRequest, NextResponse } from "next/server";
import { createSupabaseAdmin } from "../../supabase-admin";


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { guest_name, phone, attendance, guest_count, turnstileToken } =
      body ?? {};

    // Check the information before saving it.
    if (
      typeof guest_name !== "string" ||
      guest_name.trim().length < 1 ||
      guest_name.trim().length > 100 ||
      typeof phone !== "string" ||
      phone.trim().length < 1 ||
      phone.trim().length > 30 ||
      !["yes", "no"].includes(attendance) ||
      !Number.isInteger(guest_count) ||
      (attendance === "yes" &&
        (guest_count < 1 || guest_count > 20)) ||
      (attendance === "no" && guest_count !== 0)
    ) {
      return NextResponse.json(
        { error: "invalid_details" },
        { status: 400 }
      );
    }

    if (
      typeof turnstileToken !== "string" ||
      !turnstileToken
    ) {
      return NextResponse.json(
        { error: "verification_required" },
        { status: 400 }
      );
    }

    const secret = process.env.TURNSTILE_SECRET_KEY;

    if (!secret) {
      return NextResponse.json(
        { error: "server_error" },
        { status: 500 }
      );
    }

    // Verify the Cloudflare token on the server.
    const formData = new FormData();
    formData.append("secret", secret);
    formData.append("response", turnstileToken);

    const verificationResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData,
        cache: "no-store",
        signal: AbortSignal.timeout(10000),
      }
    );

    if (!verificationResponse.ok) {
      return NextResponse.json(
        { error: "verification_failed" },
        { status: 503 }
      );
    }

    const verification = (await verificationResponse.json()) as {
      success?: boolean;
      hostname?: string;
    };

    if (!verification.success) {
      return NextResponse.json(
        { error: "verification_failed" },
        { status: 403 }
      );
    }

    // Save the RSVP only after successful verification.
    const supabase = createSupabaseAdmin();

    const { error } = await supabase.from("rsvps").insert({
      guest_name: guest_name.trim(),
      phone: phone.trim(),
      attendance,
      guest_count,
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "duplicate_phone" },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { error: "server_error" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "server_error" },
      { status: 500 }
    );
  }
}
