
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

    // Supabase saving will be added later.
    setSubmitted(true);
  }

  return (
    <main
      lang={language}
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#f5eee5] text-[#5b4539]"
    >
      <section className="mx-auto w-full max-w-lg">
        {/* Full-screen mobile floral entrance */}
        <div className="relative">
          <div
            dir="ltr"
            className="relative h-[100svh] min-h-[500px] w-full overflow-hidden bg-[#e8d3ba] shadow-2xl sm:mx-auto sm:mt-8 sm:h-auto sm:min-h-0 sm:rounded-xl"
          >
            <div
              className="absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 sm:relative sm:left-auto sm:top-auto sm:h-auto sm:translate-x-0 sm:translate-y-0"
              style={{
                aspectRatio: "1024 / 1536",
                minWidth: "100%",
              }}
            >
              {/* Floral background */}
              <img
                src="/wedding-background.png"
                alt="Romantic floral wedding entrance"
                className="absolute inset-0 h-full w-full object-fill"
              />

              {/* Invitation behind doors */}
              <div
                dir={isArabic ? "rtl" : "ltr"}
                className="absolute left-[22%] top-[16%] flex h-[64%] w-[56%] flex-col items-center justify-center rounded-t-full bg-[#fff9ee]/95 px-2 text-center shadow-inner sm:px-3"
              >
                <p className="text-[9px] uppercase tracking-widest text-[#a58056] sm:text-xs">
                  {t.weddingOf}
                </p>

                <h2 className="mt-3 font-serif text-xl sm:text-3xl">
                  {t.couple}
                </h2>

                <div className="my-3 h-px w-12 bg-[#d6b78b] sm:my-4 sm:w-16" />

                <p className="font-serif text-xs sm:text-base">
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
                  className="mt-4 rounded-full bg-[#a58056] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-md sm:mt-5 sm:px-5"
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

              {/* Tap to open doors */}
              {!opened && (
                <button
                  type="button"
                  onClick={() => setOpened(true)}
                  aria-label={t.tapDoors}
                  className="absolute left-[22%] top-[16%] z-20 h-[64%] w-[56%] cursor-pointer rounded-t-full focus-visible:outline-4 focus-visible:outline-[#a58056]"
                >
                  <span className="sr-only">
                    {t.tapDoors}
                  </span>
                </button>
              )}
            </div>

            {/* Language selector */}
            <div className="absolute inset-x-0 top-0 z-30 flex justify-center px-4 pt-[max(16px,env(safe-area-inset-top))] sm:pt-5">
              <select
                aria-label="Choose invitation language"
                value={language}
                onChange={(event) =>
                  setLanguage(event.target.value as Language)
                }
                className="max-w-full rounded-full border border-[#d6b78b] bg-[#fffaf3]/95 px-5 py-3 text-sm font-medium text-[#5b4539] shadow-lg backdrop-blur-sm"
              >
                <option value="en">🇬🇧 English</option>
                <option value="ar">🇸🇦 العربية</option>
                <option value="sv">🇸🇪 Svenska</option>
              </select>
            </div>

            {/* Welcome instruction */}
            {!opened && (
              <div
                dir={isArabic ? "rtl" : "ltr"}
                className="pointer-events-none absolute inset-x-4 bottom-[max(24px,env(safe-area-inset-bottom))] z-20 flex justify-center sm:bottom-6"
              >
                <div className="max-w-xs rounded-2xl border border-white/60 bg-[#fffaf3]/90 px-5 py-3 text-center shadow-lg backdrop-blur-sm">
                  <p className="font-serif text-sm text-[#5b4539]">
                    {t.tapDoors}
                  </p>
                </div>
              </div>
            )}

            {/* Scroll to RSVP */}
            {opened && (
              <a
                href="#rsvp"
                aria-label={t.rsvp}
                className="absolute bottom-[max(20px,env(safe-area-inset-bottom))] left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1 rounded-full bg-[#fffaf3]/90 px-5 py-2 text-xs font-medium text-[#5b4539] shadow-md"
              >
                <span>{t.rsvp}</span>
                <span aria-hidden="true">↓</span>
              </a>
            )}
          </div>
        </div>

        {/* Full-screen mobile RSVP section */}
        {opened && (
          <section
            id="rsvp"
            dir={isArabic ? "rtl" : "ltr"}
            className="flex min-h-[100svh] scroll-mt-0 flex-col justify-center bg-[#f5eee5] px-4 py-8 sm:min-h-0 sm:px-6 sm:py-10"
          >
            <div className="mx-auto w-full max-w-md rounded-2xl border border-[#e1c9a9] bg-white/95 p-6 text-start shadow-lg">
              {submitted ? (
                <div role="status" className="py-6 text-center">
                  <div className="mb-4 text-4xl text-[#a58056]">
                    ♡
                  </div>

                  <h3 className="font-serif text-2xl">
                    {t.thankYou}, {guestName.trim()}!
                  </h3>

                  <p className="mt-3 text-sm text-[#8c7462]">
                    {t.previewNotice}
                  </p>

                  <p className="mt-4 font-medium">
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
                    {/* Attendance */}
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
                            className="mx-2 shrink-0 accent-[#a58056]"
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
                            className="mx-2 shrink-0 accent-[#a58056]"
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
                        className="w-full rounded-xl border border-[#e1c9a9] bg-white px-4 py-3 text-base outline-none focus:border-[#a58056]"
                      />
                    </div>

                    {/* Phone */}
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
                        className="w-full rounded-xl border border-[#e1c9a9] bg-white px-4 py-3 text-base outline-none focus:border-[#a58056]"
                      />
                    </div>

                    {/* Guest count */}
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
                          className="w-full rounded-xl border border-[#e1c9a9] bg-white px-4 py-3 text-base outline-none focus:border-[#a58056]"
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

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => {
                  setOpened(false);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="text-sm underline underline-offset-4"
              >
                {t.close}
              </button>
            </div>
          </section>
        )}
      </section>
    </main>
  );
}
