// app/providers.tsx
"use client";
import { NextUIProvider } from "@nextui-org/react";
import Nav from "./nav";
import CoralIsland_4 from "@/public/images/CoralIsland_4.webp";
import Image from "next/image";
export function NextUI({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className="max-h-[100dvh] h-screen w-full  text-foreground flex flex-col light overflow-auto">
      <Nav />
      <main className="overflow-auto w-full max-h-full h-full">
        {children}
        <Image
          className="fixed top-0 left-0 w-full h-full object-cover z-[-1] brightness-50 "
          src={CoralIsland_4}
          alt="CoralIsland"
          fill
        />
      </main>
    </NextUIProvider>
  );
}
