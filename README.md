# 💍 Wedding Invitation App

**A multilingual, interactive wedding invitation with a secure online RSVP system and database integration.**

A modern full-stack web application built with **Next.js, TypeScript, Supabase, and Cloudflare Turnstile**. The application allows wedding guests to view a digital invitation and submit their attendance responses online, while RSVP information is securely processed and stored in a database.

### 🌐 Live Application

**[View the Live Wedding Invitation](https://invitation-app-kappa.vercel.app/)**

## ✨ Key Features

- **Digital Wedding Invitation:** An interactive invitation experience accessible through a web browser.
- **Multilingual Support:** Invitation content available in multiple languages.
- **Responsive Design:** Optimized for mobile phones, tablets, and desktop devices.
- **Online RSVP Form:** Guests can submit their attendance information directly through the invitation.
- **Database Integration:** Successfully submitted RSVP responses are stored in Supabase.
- **Spam Protection:** Cloudflare Turnstile helps protect the RSVP form against automated submissions.
- **Server-Side Processing:** A Next.js API route validates submissions before saving them.
- **Duplicate Prevention:** Phone-number checks help prevent duplicate RSVP submissions.
- **Cloud Deployment:** Hosted on Vercel with GitHub-based deployment.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| Next.js | Full-stack web framework and API routes |
| React | Interactive user interface |
| TypeScript | Type-safe application development |
| Supabase (PostgreSQL) | Database for RSVP information |
| Cloudflare Turnstile | Bot and spam protection |
| Vercel | Application hosting and deployment |
| GitHub | Source code management and version control |
| Cursor | AI-assisted development environment |

## 🗄️ RSVP System & Database

The RSVP system connects the wedding invitation to a **Supabase PostgreSQL database**.

### How It Works

1. A guest opens the wedding invitation using the live application link.
2. The guest completes the RSVP form with their information.
3. Cloudflare Turnstile verifies the submission to help prevent automated spam.
4. The form sends the RSVP information to a **Next.js API endpoint**.
5. The backend validates the submission and checks for duplicate phone numbers.
6. The validated RSVP information is saved in the **Supabase database**.
7. The guest receives confirmation when the submission is successful.

### Information Stored

The database stores successfully submitted RSVP records, including:

- Guest name
- Phone number
- Attendance response
- Number of guests

This allows the wedding organizer to review guest responses directly in Supabase.

## 🔐 Security & Data Protection

The application includes several measures to help protect RSVP submissions and guest information:

- **Server-side Turnstile verification** before database insertion.
- **Server-side database access** using a protected Supabase service role key.
- **Row Level Security (RLS)** enabled on the RSVP database table.
- **Environment variables** used to manage configuration and sensitive credentials.
- **Duplicate-submission handling** to help maintain accurate RSVP records.

Sensitive credentials are not intended to be exposed in the client-side application or committed to the GitHub repository.

## 🚀 Getting Started

### Prerequisites

- Node.js
- A Supabase project
- A Cloudflare Turnstile widget

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/zinahalqeji/wedding-invitation-app.git
cd wedding-invitation-app
npm install
```

### Environment Configuration

Create a `.env.local` file in the project root and configure the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key
TURNSTILE_SECRET_KEY=your_turnstile_secret_key
```

**Important:** Never commit `.env.local` or private API keys to GitHub.

### Run Locally

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

## ☁️ Deployment

The application is deployed on **Vercel** and connected to GitHub.

Updates pushed to the connected production branch can trigger a new deployment. Required environment variables are configured in Vercel rather than stored in the repository.

**Live website:** https://invitation-app-kappa.vercel.app/

## 🧪 Testing

The RSVP submission workflow has been tested end to end, including:

- Submitting RSVP information through the live website
- Verifying Cloudflare Turnstile
- Processing the submission through the Next.js backend
- Saving the response in Supabase
- Displaying a successful submission confirmation

## 💻 Development

The application was developed using **Cursor**, an AI-assisted code editor, alongside GitHub for version control.

The project brings together frontend development, backend API integration, database management, form validation, security, and cloud deployment.

## 📌 Project Status

**Functional and deployed.**

The wedding invitation is live, and the RSVP system has been successfully tested with Supabase database storage.

---

**Built with Next.js, TypeScript, Supabase, Cloudflare Turnstile, and Vercel.**
