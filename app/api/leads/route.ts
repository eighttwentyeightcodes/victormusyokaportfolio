import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET() {
  try {
    const leadsPath = join(process.cwd(), 'data', 'leads.json')
    
    try {
      const fileContent = await readFile(leadsPath, 'utf-8')
      const leads = JSON.parse(fileContent)
      
      // Sort by most recent first
      leads.sort((a: any, b: any) => 
        new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
      )
      
      return NextResponse.json({ leads, total: leads.length })
    } catch {
      // File doesn't exist yet
      return NextResponse.json({ leads: [], total: 0 })
    }
  } catch (error) {
    console.error('Error fetching leads:', error)
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    )
  }
}
