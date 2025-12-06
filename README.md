# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

 - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
 - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Deployment & Domain

This project is a simple React site built with Vite. To deploy and point your domain (`munagalatechsolutions.com`):

- Recommended hosts: Vercel, Netlify, or any static host that supports React builds.
- Quick Vercel deploy:
	1. Sign in to https://vercel.com and import this repository.
	2. Set the framework to `Vite` (it will detect automatically) and deploy.
	3. In the Vercel dashboard, add a custom domain `munagalatechsolutions.com` and follow the DNS instructions (create the A/ALIAS or CNAME records the dashboard provides).

- Quick Netlify deploy:
	1. Sign in to https://app.netlify.com and create a new site from Git.
	2. Pick the repo and deploy. In Site settings → Domain management, add `munagalatechsolutions.com` and follow the DNS steps.

DNS notes:
- If your registrar supports ALIAS/ANAME, use it for the root domain pointing to the host. Otherwise add the A records or CNAME suggested by your hosting provider.
- Allow DNS propagation up to 24–48 hours, but usually it's much faster.

## Email (info@munagalatechsolutions.com)

You have two common options:

1. Use a hosted email provider (recommended for production): Google Workspace, Microsoft 365, Zoho Mail, or similar. Sign up and verify your domain; they will provide MX records to add to your DNS.

2. Use email forwarding offered by your domain/hosting provider or a transactional provider for contact forms (e.g., Formspree, EmailJS, or a serverless function that sends mail via SendGrid/Mailgun).

Contact form:
- The contact form in `src/pages/Home.jsx` is a demo. To receive messages by email, either:
	- Wire it to a service like Formspree (no backend) and set the form `action` to Formspree endpoint, or
	- Implement a small serverless POST endpoint (Vercel Functions, Netlify Functions) that sends email via SendGrid/Mailgun.

If you want, I can add a Formspree or Netlify Forms integration next.
