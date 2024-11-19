import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const middleware = clerkMiddleware((auth, request) => {
  const isPublicRoute = 
    request.nextUrl.pathname.startsWith('/sign-in') ||
    request.nextUrl.pathname.startsWith('/sign-up') ||
    request.nextUrl.pathname === '/' ||
    request.nextUrl.pathname.startsWith('/api/webhook');

  if (!isPublicRoute) {
    return auth.protect().then(() => NextResponse.next());
  }
  return NextResponse.next();
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};

