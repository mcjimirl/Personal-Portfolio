# Contact Form Setup with Resend

## Prerequisites

1. **Resend Account**: Create a free account at [resend.com](https://resend.com)
2. **API Key**: Get your API key from Resend dashboard
3. **Domain Configuration**: Set up a sender domain in Resend (free plan supports testing emails)

## Setup Instructions

### Backend Setup

1. **Install Dependencies**

   ```bash
   cd backend
   npm install
   ```

2. **Configure Environment Variables**
   - Copy `.env.example` to `.env`
   - Add your Resend API key:
     ```
     RESEND_API_KEY=your_api_key_here
     ```

3. **Update Email Configuration**
   - In `src/service/email.service.ts`, update the `from` email address:
     ```typescript
     from: "your-domain@your-domain.com", // Use your verified domain in Resend
     ```

4. **Start the Server**

   ```bash
   npm run dev    # Development with auto-reload
   npm start      # Production
   ```

   The server will run on `http://localhost:5000`

### Frontend Setup

1. **Configure API URL**
   - Create or update `.env.local` in the frontend directory:
     ```
     VITE_API_URL=http://localhost:5000
     ```
   - Or update the `API_BASE_URL` in `src/api/contact.api.ts`

2. **Install Dependencies** (if not already done)
   ```bash
   cd frontend
   npm install
   ```

## Domain Verification in Resend

### For Development/Testing

- Resend provides a default email from `onboarding@resend.dev` for testing
- Update the email service to use this temporarily:
  ```typescript
  from: "onboarding@resend.dev",
  ```

### For Production

1. Go to Resend Dashboard → Domains
2. Add your domain
3. Follow DNS verification steps
4. Use your domain in the email service

## Testing the Contact Form

1. Start the backend:

   ```bash
   cd backend && npm run dev
   ```

2. Start the frontend:

   ```bash
   cd frontend && npm run dev
   ```

3. Fill out the contact form on the portfolio website
4. Verify emails are received at `markjaemerldiestro@gmail.com`

## Features

✅ Contact form with validation
✅ Email sent to portfolio owner
✅ Confirmation email sent to user
✅ Beautiful email templates
✅ Error handling and user feedback
✅ Rate limiting (100 requests per 15 minutes)
✅ Security headers with Helmet
✅ Request logging with Morgan

## Troubleshooting

### Email not received

- Check your Resend API key is correct
- Verify domain is configured in Resend
- Check spam/junk folder
- Review backend logs for errors

### CORS errors

- Ensure `FRONTEND_URL` is correct in `.env`
- Check that backend server is running

### 500 Internal Server Error

- Check Resend API key is valid
- Verify environment variables are set
- Check server console for error details
