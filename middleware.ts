import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Optional configuration
  publicRoutes: ["/"]
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};