// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export async function middlewareLogging(request: NextRequest) {
  // centralized logging 
  console.log(request.nextUrl.pathname, request.url)
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/blog/:path*'],
};