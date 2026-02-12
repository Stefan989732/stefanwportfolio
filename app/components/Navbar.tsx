'use client'

import Image from "next/image";
import {
  Navbar,
  NavbarContent, 
  NavbarItem, 
  Link
} from "@heroui/react";

export default function Home() {
  return (
    <Navbar className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <NavbarContent className="text-2xl font-bold">Logo</NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
