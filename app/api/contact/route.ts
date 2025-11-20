import { NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Create lead data with timestamp
    const lead = {
      id: `lead_${Date.now()}`,
      name,
      email,
      phone: phone || 'Not provided',
      service: service || 'Not specified',
      message,
      submittedAt: new Date().toISOString(),
      status: 'new',
    }

    // Save to leads file (you can replace this with database later)
    try {
      const { readFile } = await import('fs/promises')
      const leadsPath = join(process.cwd(), 'data', 'leads.json')
      let leads = []
      
      try {
        const fileContent = await readFile(leadsPath, 'utf-8')
        leads = JSON.parse(fileContent)
      } catch {
        // File doesn't exist yet, start with empty array
      }

      leads.push(lead)
      
      await writeFile(leadsPath, JSON.stringify(leads, null, 2))
    } catch (fileError) {
      console.error('Error saving lead:', fileError)
      // Continue even if file write fails
    }

    // TODO: Add email notification here
    // You can integrate with services like:
    // - Resend
    // - SendGrid
    // - Nodemailer
    // - AWS SES

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! I will get back to you within 24 hours.',
      leadId: lead.id,
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    )
  }
}
