import { clerkMiddleware } from "@clerk/nextjs/server";

export const middleware = clerkMiddleware({
  publicRoutes: ["/", "/sign-in(.*)", "/sign-up(.*)"],
  ignoredRoutes: ["/api/webhook"]
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)"
  ]
};
