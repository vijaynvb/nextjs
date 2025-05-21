// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { middlewareLogging } from './middlewarelogging';

export async function middleware(request: NextRequest) {
  
  middlewareLogging(request);

  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET || 'supersecretkey' });

  const protectedPaths = [ '/dashboard','/blog'];

  const isProtectedRoute = protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path));

  console.log(isProtectedRoute, token);

  if (isProtectedRoute && !token) {
    const callbackUrl = request.nextUrl.clone();
    const loginUrl = new URL('/login', request.url);

    loginUrl.searchParams.set('callbackUrl', callbackUrl.toString())

    return NextResponse.redirect(loginUrl);
  }
  console.log(request.nextUrl.pathname, request.url)
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/blog/:path*'],
};