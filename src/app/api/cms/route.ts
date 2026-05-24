import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const DB_PATH = path.join(process.cwd(), 'data', 'portfolio.json')

async function readDB() {
  const raw = await fs.readFile(DB_PATH, 'utf-8')
  return JSON.parse(raw)
}

async function writeDB(data: unknown) {
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf-8')
}

// GET /api/cms?section=achievements
export async function GET(req: NextRequest) {
  try {
    const section = req.nextUrl.searchParams.get('section')
    const db = await readDB()
    if (section) {
      return NextResponse.json({ data: db[section] ?? null })
    }
    return NextResponse.json({ data: db })
  } catch {
    return NextResponse.json({ error: 'Failed to read database' }, { status: 500 })
  }
}

// POST /api/cms  body: { section, action, payload, id? }
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { section, action, payload, id } = body
    const db = await readDB()

    if (!section || !action) {
      return NextResponse.json({ error: 'Missing section or action' }, { status: 400 })
    }

    if (action === 'add') {
      if (!Array.isArray(db[section])) {
        return NextResponse.json({ error: 'Section is not an array' }, { status: 400 })
      }
      const newItem = { id: `${section}-${Date.now()}`, ...payload }
      db[section].push(newItem)
    }

    if (action === 'update') {
      if (Array.isArray(db[section])) {
        db[section] = db[section].map((item: { id: string }) =>
          item.id === id ? { ...item, ...payload } : item
        )
      } else if (typeof db[section] === 'object') {
        db[section] = { ...db[section], ...payload }
      }
    }

    if (action === 'delete') {
      if (!Array.isArray(db[section])) {
        return NextResponse.json({ error: 'Section is not an array' }, { status: 400 })
      }
      db[section] = db[section].filter((item: { id: string }) => item.id !== id)
    }

    if (action === 'reorder') {
      db[section] = payload
    }

    await writeDB(db)
    return NextResponse.json({ success: true, data: db[section] })
  } catch {
    return NextResponse.json({ error: 'Failed to write database' }, { status: 500 })
  }
}
