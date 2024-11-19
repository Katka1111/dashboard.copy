import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const middleware = clerkMiddleware((auth, request) => {
  const isPublicRoute = 
    request.url.includes('/sign-in') ||
    request.url.includes('/sign-up') ||
    request.url.includes('/api/webhook') ||
    request.url === '/';

  if (!isPublicRoute) {
    return auth.protect().then(() => NextResponse.next());
  }
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)"
  ],
};

