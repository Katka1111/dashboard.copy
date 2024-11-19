import { SignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export default async function SignInPage() {
  const { userId } = await auth();
  
  // Redirect to home if already signed in
  if (userId) {
    redirect("/");
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignIn 
        path="/sign-in"
        appearance={{
          elements: {
            formButtonPrimary: 'bg-slate-500 hover:bg-slate-600',
            footerActionLink: 'text-slate-500 hover:text-slate-600'
          }
        }}
        routing="path"
        signUpUrl="/sign-up"
      />
    </div>
  );
} 