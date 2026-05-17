import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const COOKIE = 'tl_auth';
const PASSWORD = process.env.SITE_PASSWORD ?? 'Theoremlabs';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow the login page and its API route through
  if (pathname === '/login' || pathname === '/api/login') {
    return NextResponse.next();
  }

  const auth = request.cookies.get(COOKIE);
  if (auth?.value === PASSWORD) return NextResponse.next();

  const loginUrl = new URL('/login', request.url);
  loginUrl.searchParams.set('from', encodeURIComponent(pathname));
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images/).*)'],
};
