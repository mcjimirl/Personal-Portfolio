# Contact Form Setup (mailto version)

The contact form no longer relies on a backend service or Resend. Instead it uses a
`mailto:` link so that visitors send messages directly from their own email client to
your inbox. This keeps the entire flow in the frontend and removes the need for any
server at all.

## How it works

- When the user fills the form and clicks **Send**, the app builds a `mailto:` URL with
  the subject and body populated from the form fields.
- The browser opens the visitor's default mail program with the email pre‑filled.
- The visitor reviews and sends the message; you receive it in your personal email account.

## Setup Instructions

1. **Make sure your portfolioConfig has your email address.**
   In `frontend/src/config/portfolio.ts`, update the `personal.email` field to your own
   address. This is the address that will be used in the `mailto:` link.

2. **Install frontend dependencies (if you haven't already):**

   ```bash
   cd frontend
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Try the form:**
   Open http://localhost:5173, fill out the contact form and submit. Your mail client
   should launch with a draft addressed to your email.

## Notes

- There is no backend in this configuration; the `backend/` directory has been
  deprecated and can be removed if you like (it may still exist empty in the repo).
- Since the email is sent from the visitor's account, they will see the message in
  their “Sent” folder and the reply address will be their own email.
- This method avoids API keys, server hosting, and services like Resend. It's simple
  and reliable for a personal portfolio site.

## Troubleshooting

- **Email client doesn't open?**
  Ensure the user has a default mail application configured in their operating system.
- **Fields not pre‑populated?**
  Check that the form inputs have `name` attributes (`user_name`, `user_email`, `message`).
- **Want a backend again later?**
  You can always reintroduce a server and use an email API if you need to process
  submissions automatically.
