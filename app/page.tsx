
"use client";

import { useState, type FormEvent } from "react";
import { translations, type Language } from "./translations";

type Attendance = "yes" | "no" | "";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [language, setLanguage] = useState<Language>("en");
  const [attendance, setAttendance] = useState<Attendance>("");
  const [guestName, setGuestName] = useState("");
  const [phone, setPhone] = useState("");
  const [guestCount, setGuestCount] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const t = translations[language];
  const isArabic = language === "ar";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!attendance || !guestName.trim() || !phone.trim()) {
      return;
    }

    if (
      attendance === "yes" &&
      (!Number.isInteger(guestCount) ||
        guestCount < 1 ||
        guestCount > 20)
    ) {
      return;
    }

    // We will connect this form to Supabase later.
    setSubmitted(true);
  }

  return (
    <main
      lang={language}
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#f5eee5] px-4 py-10 text-[#5b4539]"
    >
      <section className="mx-auto w-full max-w-lg text-center">
        {/* Language selector */}
        <div className="mb-6 flex justify-center">
          <select
            aria-label="Choose invitation language"
            value={language}
            onChange={(event) =>
              setLanguage(event.target.value as Language)
            }
            className="rounded-full border border-[#d6b78b] bg-white px-5 py-3 text-sm text-[#5b4539] shadow-sm"
          >
            <option value="en">🇬🇧 English</option>
            <option value="ar">🇸🇦 العربية</option>
            <option value="sv">🇸🇪 Svenska</option>
          </select>
        </div>

        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#a58056]">
          {t.specialCelebration}
        </p>

        <h1 className="mb-3 font-serif text-3xl sm:text-4xl">
          {t.invited}
        </h1>

        <p className="mb-6 text-sm text-[#8c7462]">
          {opened ? t.welcome : t.tapDoors}
        </p>

        {/* Floral entrance */}
        <div
          dir="ltr"
          className="relative mx-auto w-full max-w-[500px]"
        >
          <div
            className="relative w-full overflow-hidden rounded-xl shadow-2xl"
            style={{ aspectRatio: "1024 / 1536" }}
          >
            {/* Stationary floral background */}
            <img
              src="/wedding-background.png"
              alt="Romantic floral wedding entrance"
              className="absolute inset-0 h-full w-full object-fill"
            />

            {/* Invitation behind the doors */}
            <div
              dir={isArabic ? "rtl" : "ltr"}
              className="absolute left-[22%] top-[16%] flex h-[64%] w-[56%] flex-col items-center justify-center rounded-t-full bg-[#fff9ee]/95 px-3 text-center shadow-inner"
            >
              <p className="text-[10px] uppercase tracking-widest text-[#a58056] sm:text-xs">
                {t.weddingOf}
              </p>

              <h2 className="mt-3 font-serif text-2xl sm:text-3xl">
                {t.couple}
              </h2>

              <div className="my-4 h-px w-16 bg-[#d6b78b]" />

              <p className="font-serif text-sm sm:text-base">
                {t.date}
              </p>

              <p className="mt-2 text-xs sm:text-sm">
                {t.time}
              </p>

              <p className="mt-3 text-xs sm:text-sm">
                {t.venue}
              </p>

              <p className="mt-1 text-[10px] text-[#987f6c] sm:text-xs">
                {t.location}
              </p>

              <a
                href="#rsvp"
                className="mt-5 rounded-full bg-[#a58056] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white"
              >
                {t.rsvp}
              </a>
            </div>

            {/* Left door */}
            <div
              className="pointer-events-none absolute left-[22%] top-[12%] h-[69%] w-[28%] origin-left transition-transform duration-[1600ms] ease-in-out [backface-visibility:hidden]"
              style={{
                transformStyle: "preserve-3d",
                transform: opened
                  ? "perspective(800px) rotateY(-110deg)"
                  : "perspective(800px) rotateY(0deg)",
              }}
            >
              <img
                src="/wedding-left-door-cropped.png"
                alt=""
                className="h-full w-full object-fill"
              />
            </div>

            {/* Right door */}
            <div
              className="pointer-events-none absolute right-[22%] top-[12%] h-[69%] w-[28%] origin-right transition-transform duration-[1600ms] ease-in-out [backface-visibility:hidden]"
              style={{
                transformStyle: "preserve-3d",
                transform: opened
                  ? "perspective(800px) rotateY(110deg)"
                  : "perspective(800px) rotateY(0deg)",
              }}
            >
              <img
                src="/wedding-right-door-cropped.png"
                alt=""
                className="h-full w-full object-fill"
              />
            </div>

            {/* Click to open */}
            {!opened && (
              <button
                type="button"
                onClick={() => setOpened(true)}
                aria-label="Open wedding invitation"
                className="absolute left-[22%] top-[16%] z-20 h-[64%] w-[56%] cursor-pointer rounded-t-full focus-visible:outline-4 focus-visible:outline-[#a58056]"
              >
                <span className="sr-only">
                  {t.tapDoors}
                </span>
              </button>
            )}
          </div>
        </div>

        {/* RSVP form */}
        {opened && (
          <div
            id="rsvp"
            dir={isArabic ? "rtl" : "ltr"}
            className="mx-auto mt-8 max-w-md rounded-2xl border border-[#e1c9a9] bg-white/90 p-6 text-start shadow-lg"
          >
            {submitted ? (
              <div role="status" className="py-6 text-center">
                <div className="mb-4 text-4xl">♡</div>

                <h3 className="font-serif text-2xl">
                  {t.thankYou}, {guestName.trim()}!
                </h3>

                <p className="mt-3 text-sm text-[#8c7462]">
                  {t.previewNotice}
                </p>

                <p className="mt-3 font-medium">
                  {attendance === "yes"
                    ? `${t.attending}: ${guestCount} ${
                        guestCount === 1
                          ? t.person
                          : t.people
                      }`
                    : t.declining}
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-full border border-[#a58056] px-6 py-2 text-sm"
                >
                  {t.edit}
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-center font-serif text-2xl">
                  {t.willAttend}
                </h3>

                <p className="mb-6 mt-2 text-center text-sm text-[#8c7462]">
                  {t.responsePrompt}
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Attendance choice */}
                  <fieldset>
                    <legend className="mb-3 text-sm font-medium">
                      {t.attendance} *
                    </legend>

                    <div className="grid grid-cols-2 gap-3">
                      <label
                        className={`flex cursor-pointer items-center justify-center rounded-xl border p-3 text-center text-sm transition ${
                          attendance === "yes"
                            ? "border-[#a58056] bg-[#f5eee5]"
                            : "border-[#e1c9a9]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="attendance"
                          value="yes"
                          checked={attendance === "yes"}
                          onChange={() =>
                            setAttendance("yes")
                          }
                          className="mx-2 accent-[#a58056]"
                          required
                        />
                        {t.yes}
                      </label>

                      <label
                        className={`flex cursor-pointer items-center justify-center rounded-xl border p-3 text-center text-sm transition ${
                          attendance === "no"
                            ? "border-[#a58056] bg-[#f5eee5]"
                            : "border-[#e1c9a9]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="attendance"
                          value="no"
                          checked={attendance === "no"}
                          onChange={() =>
                            setAttendance("no")
                          }
                          className="mx-2 accent-[#a58056]"
                          required
                        />
                        {t.no}
                      </label>
                    </div>
                  </fieldset>

                  {/* Guest name */}
                  <div>
                    <label
                      htmlFor="guest-name"
                      className="mb-2 block text-sm font-medium"
                    >
                      {t.fullName} *
                    </label>

                    <input
                      id="guest-name"
                      type="text"
                      value={guestName}
                      onChange={(event) =>
                        setGuestName(event.target.value)
                      }
                      placeholder={t.namePlaceholder}
                      autoComplete="name"
                      required
                      maxLength={100}
                      className="w-full rounded-xl border border-[#e1c9a9] bg-white px-4 py-3 text-sm outline-none focus:border-[#a58056]"
                    />
                  </div>

                  {/* Phone number */}
                  <div>
                    <label
                      htmlFor="guest-phone"
                      className="mb-2 block text-sm font-medium"
                    >
                      {t.phone} *
                    </label>

                    <input
                      id="guest-phone"
                      type="tel"
                      dir="ltr"
                      value={phone}
                      onChange={(event) =>
                        setPhone(event.target.value)
                      }
                      placeholder={t.phonePlaceholder}
                      autoComplete="tel"
                      required
                      maxLength={30}
                      className="w-full rounded-xl border border-[#e1c9a9] bg-white px-4 py-3 text-sm outline-none focus:border-[#a58056]"
                    />
                  </div>

                  {/* Number of attendees */}
                  {attendance === "yes" && (
                    <div>
                      <label
                        htmlFor="guest-count"
                        className="mb-2 block text-sm font-medium"
                      >
                        {t.numberAttendees} *
                      </label>

                      <input
                        id="guest-count"
                        type="number"
                        min={1}
                        max={20}
                        step={1}
                        value={guestCount}
                        onChange={(event) =>
                          setGuestCount(
                            Number(event.target.value)
                          )
                        }
                        required
                        className="w-full rounded-xl border border-[#e1c9a9] bg-white px-4 py-3 text-sm outline-none focus:border-[#a58056]"
                      />

                      <p className="mt-2 text-xs text-[#8c7462]">
                        {t.includeYourself}
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#a58056] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#8e6945]"
                  >
                    {t.submit}
                  </button>
                </form>
              </>
            )}
          </div>
        )}

        {opened && (
          <button
            type="button"
            onClick={() => setOpened(false)}
            className="mt-6 text-sm underline underline-offset-4"
          >
            {t.close}
          </button>
        )}
      </section>
    </main>
  );
}
