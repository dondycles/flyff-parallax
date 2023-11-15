"use client";

import Image from "next/image";
import { Link } from "@nextui-org/link";
import logo from "@/public/images/Flyff_2.png";
import { Button, ButtonGroup } from "@nextui-org/react";
export default function Nav() {
  return (
    <nav className="fixed w-[100%] top-0 py-8 flex flex-row justify-between items-center px-4 sm:px-8 pr-16 z-50 bg-foreground/25 ">
      <Link href="/">
        <Image src={logo} alt="Flyff" height={114} width={114} />
      </Link>
      <ButtonGroup
        color="primary"
        variant="shadow"
        className="flex flex-row gap-[1px]"
      >
        <Button as={Link} className="font-bold text-white " href="/">
          NFT
        </Button>
        <Button as={Link} className="font-bold text-white " href="/">
          ROADMAP
        </Button>
        <Button as={Link} className="font-bold text-white " href="/">
          WHITEPAPER
        </Button>
      </ButtonGroup>
    </nav>
  );
}
