import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  return (
    <main className="flex flex-col justify-center items-center gap-2 h-screen">
      <h1>Welcome to Pathway 👋</h1>
      <h2>Login to continue</h2>
      <SignInButton>
        <Button variant="default" className="duration-500 animate-in zoom-in">
          Sign In
        </Button>
      </SignInButton>
    </main>
  );
}
