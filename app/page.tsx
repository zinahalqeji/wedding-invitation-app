
"use client";

import { useState } from "react";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="min-h-screen bg-[#f5eee5] px-4 py-10 text-[#5b4539]">
      <section className="mx-auto w-full max-w-lg text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#a58056]">
          A Special Celebration
        </p>

        <h1 className="mb-3 font-serif text-3xl sm:text-4xl">
          You&apos;re Invited to a Wedding
        </h1>

        <p className="mb-6 text-sm text-[#8c7462]">
          {opened
            ? "We can't wait to celebrate with you"
            : "Tap the doors to open your invitation"}
        </p>

        {/* Floral entrance */}
        <div className="relative mx-auto w-full max-w-[500px]">
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

            {/* Invitation revealed behind the doors */}
            <div className="absolute left-[22%] top-[16%] flex h-[64%] w-[56%] flex-col items-center justify-center rounded-t-full bg-[#fff9ee]/95 px-3 text-center shadow-inner">
              <p className="text-[10px] uppercase tracking-widest text-[#a58056] sm:text-xs">
                The Wedding Of
              </p>

              <h2 className="mt-3 font-serif text-2xl sm:text-3xl">
                Emma &amp; Adam
              </h2>

              <div className="my-4 h-px w-16 bg-[#d6b78b]" />

              <p className="font-serif text-sm sm:text-base">
                Saturday, June 12, 2027
              </p>

              <p className="mt-2 text-xs sm:text-sm">
                At 5:00 PM
              </p>

              <p className="mt-3 text-xs sm:text-sm">
                The Grand Garden Hall
              </p>

              <p className="mt-1 text-[10px] text-[#987f6c] sm:text-xs">
                Stockholm, Sweden
              </p>

              <a
                href="#rsvp"
                className="mt-5 rounded-full bg-[#a58056] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white"
              >
                RSVP
              </a>
            </div>

            {/* 3D doors */}
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

            {/* Open interaction */}
            {!opened && (
              <button
                type="button"
                onClick={() => setOpened(true)}
                aria-label="Open wedding invitation"
                className="absolute left-[22%] top-[16%] z-20 h-[64%] w-[56%] cursor-pointer rounded-t-full focus-visible:outline-4 focus-visible:outline-[#a58056]"
              >
                <span className="sr-only">
                  Tap to open the wedding invitation
                </span>
              </button>
            )}
          </div>
        </div>

        {/* RSVP placeholder */}
        {opened && (
          <div
            id="rsvp"
            className="mx-auto mt-8 max-w-md rounded-2xl border border-[#e1c9a9] bg-white/90 p-6 shadow-lg"
          >
            <h3 className="font-serif text-2xl">
              Will You Attend?
            </h3>

            <p className="mt-2 text-sm text-[#8c7462]">
              RSVP form coming in the next step
            </p>
          </div>
        )}

        {opened && (
          <button
            type="button"
            onClick={() => setOpened(false)}
            className="mt-6 text-sm underline underline-offset-4"
          >
            Close Invitation
          </button>
        )}
      </section>
    </main>
  );
}
