import type { ReactNode } from "react";
import { SignOutButton } from "@clerk/nextjs";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav>todo...</nav>
      <header>
        <h1 className="text-foreground">Pathway</h1>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-center">
        {children}
        <div>
          <SignOutButton />
        </div>
      </main>
    </>
  );
}
