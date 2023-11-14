// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import Nav from "./nav";

export function NextUI({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className="max-h-[100dvh] h-screen w-full bg-background text-foreground flex flex-col">
      <Nav />
      {children}
    </NextUIProvider>
  );
}
