'use client'

import {
  Navbar,
  NavbarContent, 
  NavbarItem, 
  Link
} from "@heroui/react";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  const linkBase = "flex items-center justify-center h-12 px-4 border rounded-xl transition-all";
  const active = "bg-gray-500 text-gray-100";
  const inactive = "hover:bg-gray-700";

  return (
    <Navbar className="bg-gray-800 p-4 flex justify-between items-center">
      <NavbarContent className="text-2xl font-bold">
        <img src={'/Stefanwurpel.png'} alt="Stefan Wurpel" width={100} height={100} className="rounded-xl border border-yellow-400"/>
        </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4 " justify="center">

          <Link color="foreground" href="/">
            <NavbarItem isActive={pathname === "/"} className={`${linkBase} ${pathname === "/" ? active : inactive}`}>Home</NavbarItem>
          </Link>
          <Link aria-current="page" href="/projects">
            <NavbarItem isActive={pathname === "/projects"} className={`${linkBase} ${pathname === "/projects" ? active : inactive}`}>Projecten</NavbarItem> 
          </Link>
          <Link color="foreground" href="/portfolio">
            <NavbarItem isActive={pathname === "/portfolio"} className={`${linkBase} ${pathname === "/portfolio" ? active : inactive}`}>Portfolio</NavbarItem>
          </Link>
          <Link color="foreground" href="/aboutme">
            <NavbarItem isActive={pathname === "/aboutme"} className={`${linkBase} ${pathname === "/aboutme" ? active : inactive}`}>Over mij</NavbarItem>
          </Link>
          <Link color="foreground" href="/contact">
            <NavbarItem isActive={pathname === "/contact"} className={`${linkBase} ${pathname === "/contact" ? active : inactive}`}>Contact</NavbarItem>
          </Link>
      </NavbarContent>
    </Navbar>
  );
}
