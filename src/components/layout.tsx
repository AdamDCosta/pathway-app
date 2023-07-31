import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav>todo...</nav>
      <header>Pathway...</header>
      <main>{children}</main>
    </>
  );
}
