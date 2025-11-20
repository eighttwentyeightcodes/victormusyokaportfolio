export interface ContactFormData {
  name: string
  email: string
  phone?: string
  service?: string
  message: string
}

export interface Lead extends ContactFormData {
  id: string
  submittedAt: string
  status: 'new' | 'contacted' | 'converted' | 'closed'
}

export interface ContactFormResponse {
  success: boolean
  message: string
  leadId?: string
  error?: string
}
