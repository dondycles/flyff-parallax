"use client";

import Image from "next/image";
import { Link } from "@nextui-org/link";
import logo from "@/public/images/Flyff_2.png";
export default function Nav() {
  return (
    <nav className="py-8 flex flex-row justify-between items-center px-4 sm:px-8 bg-transparent">
      <Link href="/">
        <Image src={logo} alt="Flyff" height={96} width={96} />
      </Link>
      <div className="flex flex-row gap-4">
        <Link className="font-bold" href="/">
          TEXT
        </Link>
        <Link className="font-bold" href="/">
          TEXT
        </Link>
        <Link className="font-bold" href="/">
          TEXT
        </Link>
      </div>
    </nav>
  );
}
