import Head from "next/head";
import { api } from "@/utils/api";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const user = useUser();

  return (
    <>
      <Head>
        <title>Pathway</title>
        <meta name="description" content="Build amazing products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-foreground">
        <h1 className="text-background">Pathway</h1>
        <div>
          <div>
            {!user.isSignedIn && (
              <SignInButton>
                <Button variant="secondary" className="animate-in">
                  Sign In
                </Button>
              </SignInButton>
            )}
            <Button variant="destructive">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <div>{!!user.isSignedIn && <SignOutButton />}</div>
        </div>
      </main>
    </>
  );
}
