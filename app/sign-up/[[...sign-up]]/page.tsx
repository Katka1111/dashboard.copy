import { SignUp } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function SignUpPage() {
  const { userId } = await auth();
  
  // If user is already signed in, redirect to dashboard
  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <SignUp 
        appearance={{
          elements: {
            formButtonPrimary: 'bg-slate-500 hover:bg-slate-600',
            footerActionLink: 'text-slate-500 hover:text-slate-600',
            card: 'bg-white shadow-md rounded-lg'
          },
          variables: {
            spacingUnit: '0.75rem',
            borderRadius: '0.375rem'
          }
        }}
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        afterSignUpUrl="/dashboard"
      />
    </div>
  );
} 