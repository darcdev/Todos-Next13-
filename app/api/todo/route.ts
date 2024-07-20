import { NextResponse } from 'next/server'

export const GET = async (request: Request, response: Response) => {
  return NextResponse.json({
    mesagge: 'hello',
  })
}

export const POST = async (request: Request, response: Response) => {
  const data = await request.json()
  return NextResponse.json({ message: data })
}
