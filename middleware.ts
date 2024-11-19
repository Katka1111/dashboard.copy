import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: ["/", "/sign-in(.*)", "/sign-up(.*)"],
  // Routes that can always be accessed, no authentication required
  ignoredRoutes: ["/api/webhook"],
  // Reduce CPU time by disabling debug
  debug: false,
  // Prevent middleware from running on static files
  skipPattern: /^\/(?:_next|favicon\.ico).*$/
});

// Configure Middleware Matcher to optimize performance
export const config = {
  matcher: [
    // Exclude files with a "." (like favicon.ico)
    // Exclude _next (static files)
    // Match all other routes
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};

