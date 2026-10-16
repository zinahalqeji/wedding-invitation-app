# Wedding Invitation App 💍

A beautiful, interactive digital wedding invitation built with Next.js.

Guests can open the invitation online, view the wedding details, and submit their RSVP directly from their phone or computer.

## Features

- Elegant floral wedding invitation with an opening animation
- Multilingual invitation experience
- Mobile-friendly design
- Online RSVP form
- Guest attendance and guest-count tracking
- Secure RSVP verification using Cloudflare Turnstile
- RSVP responses stored in Supabase
- Deployment through Vercel

## Technologies

- **Next.js** — Application framework
- **React & TypeScript** — User interface and application logic
- **Supabase** — RSVP database
- **Cloudflare Turnstile** — Spam and bot protection
- **Vercel** — Hosting and deployment
- **GitHub** — Source code and version control

## Getting Started

Clone the repository and install dependencies:

```bash
npm install
```

Create a `.env.local` file with the required environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
```

Keep secret keys private. Never commit `.env.local` to GitHub.

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 to view the invitation.

## RSVP System

Guests submit their name, phone number, attendance response, and guest count.

The application verifies the Cloudflare Turnstile token on the server before saving RSVP information to Supabase.

## Deployment

The application is deployed using Vercel and connected to the GitHub repository.

Production environment variables are configured securely in Vercel.

## Privacy

Guest information is stored in Supabase and should only be accessible to authorized administrators.

## Project Status

The wedding invitation and RSVP submission system have been implemented and tested successfully.
