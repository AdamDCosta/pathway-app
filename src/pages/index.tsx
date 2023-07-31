import Head from "next/head";
import { api } from "@/utils/api";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

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
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div>
          <div>{!user.isSignedIn && <SignInButton />}</div>
          <div>{!!user.isSignedIn && <SignOutButton />}</div>
        </div>
      </main>
    </>
  );
}
