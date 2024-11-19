import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const { userId } = await auth();

  // If user clicks "Go to Dashboard", they'll be redirected there
  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Welcome to Life Insurance Dashboard</h1>
          <p className="text-xl text-gray-600 mb-8">Get started by signing in or signing up</p>
          <div className="space-y-4">
            <Link 
              href="/sign-in" 
              className="w-full inline-flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
            >
              Sign In
            </Link>
            <Link 
              href="/sign-up" 
              className="w-full inline-flex justify-center py-3 px-4 border border-slate-300 rounded-md shadow-sm text-sm font-medium text-slate-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
