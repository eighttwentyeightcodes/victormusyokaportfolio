# Lead Management System

This portfolio includes a complete lead submission framework for handling contact form inquiries.

## Features

### 1. **Contact Form with Full Validation**
- Client-side validation for required fields
- Email format validation
- Real-time form state management
- Loading states during submission
- Success/error notifications with animations

### 2. **API Route for Lead Processing**
- Endpoint: `POST /api/contact`
- Validates all incoming data
- Saves leads to JSON file (`/data/leads.json`)
- Returns proper success/error responses
- Includes timestamp and unique ID for each lead

### 3. **Lead Data Structure**
Each lead contains:
- `id`: Unique identifier (timestamp-based)
- `name`: Contact's full name
- `email`: Contact's email address
- `phone`: Phone number (optional)
- `service`: Service they're interested in
- `message`: Their inquiry message
- `submittedAt`: ISO timestamp
- `status`: Lead status (new, contacted, converted, closed)

## How It Works

### Form Submission Flow
1. User fills out contact form
2. Client-side validation runs
3. Form data sent to `/api/contact` endpoint
4. Server validates and saves to `data/leads.json`
5. Success message displayed to user
6. Form resets automatically

### Viewing Leads
Leads are stored in `/data/leads.json` as a JSON array. You can:
- View the file directly
- Build an admin dashboard (future enhancement)
- Export to CSV for tracking
- Integrate with CRM systems

## Future Enhancements

### Email Notifications
Add email service integration to receive instant notifications:

```typescript
// In /app/api/contact/route.ts
// Add after lead is saved:

// Option 1: Using Resend (recommended)
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'portfolio@yourdomain.com',
  to: 'victormusyoka003@gmail.com',
  subject: `New Lead: ${lead.name}`,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${lead.name}</p>
    <p><strong>Email:</strong> ${lead.email}</p>
    <p><strong>Phone:</strong> ${lead.phone}</p>
    <p><strong>Service:</strong> ${lead.service}</p>
    <p><strong>Message:</strong></p>
    <p>${lead.message}</p>
  `
})
```

### Database Integration
Replace JSON file storage with a database:

```typescript
// Option 1: MongoDB
import { MongoClient } from 'mongodb'
await db.collection('leads').insertOne(lead)

// Option 2: PostgreSQL with Prisma
await prisma.lead.create({ data: lead })

// Option 3: Supabase
const { data, error } = await supabase
  .from('leads')
  .insert([lead])
```

### CRM Integration
Connect to popular CRM systems:
- **HubSpot**: Use their API to create contacts
- **Salesforce**: Push leads to Sales Cloud
- **Pipedrive**: Create deals automatically
- **Google Sheets**: Log leads for easy tracking

### Analytics
Track form submissions:
- Google Analytics events
- Conversion tracking
- Lead source attribution
- Response time metrics

## Environment Setup

For email notifications, add to `.env.local`:
```
RESEND_API_KEY=your_api_key_here
# or
SENDGRID_API_KEY=your_api_key_here
```

## Security Notes

- Form includes CSRF protection via Next.js
- Email validation prevents invalid submissions
- Rate limiting recommended for production
- Leads file is gitignored to protect privacy
- Consider adding reCAPTCHA for spam prevention

## Testing

Test the contact form:
1. Navigate to `/contact`
2. Fill out all required fields
3. Submit the form
4. Check `/data/leads.json` for the new entry
5. Verify success message appears

## Support

For issues or questions about the lead system, refer to:
- Next.js API Routes documentation
- Contact form validation best practices
- Email service provider docs (Resend, SendGrid, etc.)
