# Elites Global Website

A responsive Next.js website for Elites Global, positioned as a website design, development and digital positioning studio.

## Included
- Responsive homepage and mobile navigation
- About, services, approach/process, project-concept and contact sections
- Contact form API route with input validation
- Optional email delivery through Resend
- SEO metadata and Open Graph defaults
- No paid UI libraries or icon dependencies

## Run locally
1. Install Node.js 18.17 or later.
2. In this folder run `npm install`.
3. Run `npm run dev`.
4. Open http://localhost:3000.

## Configure contact form email delivery
The contact form endpoint is included. To send enquiries to `hello@elites-global.org`:
1. Create a Resend account and verify a sending domain.
2. Copy `.env.example` to `.env.local`.
3. Set `RESEND_API_KEY` to your Resend API key.
4. Set `CONTACT_TO=hello@elites-global.org`.
5. Set `CONTACT_FROM` to a sender address on your verified domain.
6. Restart the app and deploy the environment variables to Vercel.

Without these settings, the form displays a clear message directing visitors to email `hello@elites-global.org` directly. It does not pretend an email was sent.

## Deploy to Vercel
1. Push this folder to a new GitHub repository.
2. Import that repository into Vercel.
3. Add the environment variables above if email delivery is configured.
4. Deploy.
5. In Vercel, open Project Settings → Domains and add `elites-global.org` and `www.elites-global.org`.
6. Copy the DNS records Vercel provides into the domain registrar's DNS settings. Do not guess DNS values; use the exact records Vercel displays.

## Before publishing
- Confirm that Jackson Ethan is the correct public-facing contact name.
- Replace the illustrative project concepts with real work before describing them as client case studies.
- Add a real privacy policy if you collect and store visitor information.
- Confirm all service descriptions accurately represent the business.
