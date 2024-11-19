import { clerkMiddleware } from "@clerk/nextjs/server";

export const middleware = clerkMiddleware((auth, request) => {
  if (!request.url.includes('/sign-in') && 
      !request.url.includes('/sign-up') && 
      !request.url.includes('/') && 
      !request.url.includes('/api/webhook')) {
    return auth.protect();
  }
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
