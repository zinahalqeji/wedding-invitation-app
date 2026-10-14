
"use client";

import { useState } from "react";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f5eee5] px-4 py-10 text-[#5b4539]">
      <div className="pointer-events-none absolute left-[-100px] top-[-100px] h-72 w-72 rounded-full bg-[#e5c8a7]/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-100px] right-[-100px] h-72 w-72 rounded-full bg-[#e5c8a7]/40 blur-3xl" />

      <section className="relative w-full max-w-md text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#a58056]">
          A Special Celebration
        </p>

        <h1 className="mb-3 font-serif text-4xl">
          You're Invited to a Wedding
        </h1>

        <p className="mb-8 text-sm text-[#8c7462]">
          {opened
            ? "We can't wait to celebrate with you"
            : "Tap the doors to open your invitation"}
        </p>

        <div className="relative mx-auto h-[470px] w-full max-w-[350px] [perspective:1200px]">
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-t-[150px] border-4 border-[#c7a16a] bg-[#fffaf3] p-6 shadow-2xl">
            <div className="mb-5 flex h-28 w-28 items-center justify-center rounded-full border-2 border-[#d6b78b] bg-[#f7eee2] text-5xl">
              ♡
            </div>

            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#b28d60]">
              The Wedding Of
            </p>

            <h2 className="font-serif text-4xl">Emma & Adam</h2>

            <div className="my-5 h-px w-20 bg-[#d6b78b]" />

            <p className="font-serif text-lg">Saturday, June 12, 2027</p>
            <p className="mt-2 text-sm">At 5:00 PM</p>
            <p className="mt-3 text-sm">The Grand Garden Hall</p>
            <p className="text-xs text-[#987f6c]">Stockholm, Sweden</p>

            <a
              href="#rsvp"
              className="mt-7 rounded-full bg-[#a58056] px-7 py-3 text-xs font-semibold uppercase tracking-widest text-white"
            >
              RSVP
            </a>
          </div>

          <div
            className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-1/2 origin-left rounded-tl-[150px] border-2 border-[#bd9867] bg-gradient-to-r from-[#ddc29a] to-[#f4e4ca] shadow-xl transition-transform duration-[1400ms] ease-in-out [backface-visibility:hidden] ${
              opened ? "[transform:rotateY(-110deg)]" : ""
            }`}
          >
            <div className="absolute inset-4 rounded-tl-[130px] border border-[#b38c57]/60" />
            <div className="absolute right-3 top-1/2 h-3 w-3 rounded-full bg-[#a57d43] shadow" />
          </div>

          <div
            className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-1/2 origin-right rounded-tr-[150px] border-2 border-[#bd9867] bg-gradient-to-l from-[#ddc29a] to-[#f4e4ca] shadow-xl transition-transform duration-[1400ms] ease-in-out [backface-visibility:hidden] ${
              opened ? "[transform:rotateY(110deg)]" : ""
            }`}
          >
            <div className="absolute inset-4 rounded-tr-[130px] border border-[#b38c57]/60" />
            <div className="absolute left-3 top-1/2 h-3 w-3 rounded-full bg-[#a57d43] shadow" />
          </div>

          {!opened && (
            <button
              type="button"
              onClick={() => setOpened(true)}
              className="absolute inset-0 z-20 flex w-full flex-col items-center justify-center rounded-t-[150px] focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#a58056]"
              aria-label="Open wedding invitation doors"
            >
              <span className="rounded-full border border-[#a58056] bg-[#fff9ee]/90 px-5 py-3 font-serif text-lg shadow-lg">
                Tap to Open ♡
              </span>
            </button>
          )}
        </div>

        {opened && (
          <div id="rsvp" className="mx-auto mt-12 max-w-[350px] rounded-2xl border border-[#e1c9a9] bg-white/80 p-6 shadow-lg">
            <h3 className="font-serif text-2xl">Will You Attend?</h3>
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
