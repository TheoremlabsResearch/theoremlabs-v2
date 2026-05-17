import { NextRequest, NextResponse } from 'next/server';

const PASSWORD = process.env.SITE_PASSWORD ?? 'Theoremlabs';
const COOKIE = 'tl_auth';

export async function POST(request: NextRequest) {
  const { password, from } = await request.json() as { password: string; from?: string };

  if (password !== PASSWORD) {
    return NextResponse.json({ error: 'Incorrect password' }, { status: 401 });
  }

  const destination = from && from.startsWith('/') ? from : '/';
  const response = NextResponse.json({ ok: true, redirect: destination });

  response.cookies.set(COOKIE, PASSWORD, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  });

  return response;
}
