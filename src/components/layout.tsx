import type { ReactNode } from "react";
import { SignOutButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-100 flex min-h-screen">
      <nav className="border-foreground flex w-48 flex-col gap-2 border px-2">
        Sidenav...
        <SignOutButton>
          <Button variant="default">Sign out</Button>
        </SignOutButton>
      </nav>
      <main className="flex flex-grow flex-col justify-start">
        <header className="border-foreground w-100 border">
          <h1 className="text-foreground">Header...</h1>
        </header>
        {children}
      </main>
    </div>
  );
}
