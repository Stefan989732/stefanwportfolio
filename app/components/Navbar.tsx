'use client'

import {
  Navbar,
  NavbarContent, 
  NavbarItem, 
  Link
} from "@heroui/react";
import Stefanwurpel from '../public/Stefanwurpel.png';
import { px } from "framer-motion";

export default function Home() {
  return (
    <Navbar className="bg-gray-800 p-4 flex justify-between items-center">
      <NavbarContent className="text-2xl font-bold">
        <img src={'/Stefanwurpel.png'} alt="Stefan Wurpel" width={100} height={100} className="rounded-xl border border-yellow-400"/>
        </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarItem className="p-3 border">
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive className="p-3 border">
          <Link aria-current="page" href="/projects">
            Projecten
          </Link>
        </NavbarItem>
        <NavbarItem className="p-3 border">
          <Link color="foreground" href="/portfolio">
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem className="p-3 border">
          <Link color="foreground" href="/aboutme">
            Over mij
          </Link>
        </NavbarItem>
        <NavbarItem className="p-3 border">
          <Link color="foreground" href="/contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
