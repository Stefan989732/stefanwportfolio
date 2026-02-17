'use client'

import {
  Navbar,
  NavbarContent, 
  NavbarItem, 
  Link,
  Image,
  Button
} from "@heroui/react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";


export default function Home() {
  const [selected, setSelected] = useState('spring');
  const pathname = usePathname();

  //navigation buttons
  const linkBase = "flex items-center justify-center h-12 px-4 border rounded-xl transition-all shadow-xl/30";
  const active = "bg-gray-500 text-gray-100  underline underline-offset-8";
  const inactive = "hover:bg-gray-700 hover:text-yellow-400 hover:underline underline-offset-8 ";

  //seasonal buttons
  const baseItem = 'h-8 transition-all duration-300 flex items-center justify-center';
  const selectedItem = 'flex-grow px-6';
  const unselectedItem = 'px-1'; 

  return (
    <Navbar className="bg-gray-800 p-4 flex justify-between items-center fixed">
      <NavbarContent>
        <Image src={'/Stefanwurpel.svg'} alt="Stefan Wurpel" width={150} height={150} 
        className="absolute rounded-xl border border-gray-400 shadow-xl/30"/>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
      <NavbarContent className="shadow-xl/30 hidden sm:flex gap-0">
        <NavbarItem className="rounded-s-lg">
          <Link 
            onClick={() => setSelected('spring')}
            className={`${baseItem} rounded-s-lg bg-pink-400 ${
            selected === 'spring' ? selectedItem : unselectedItem
            }`}>
          <Image src={'/flower.svg'}/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link  
            onClick={() => setSelected('summer')}
            className={`${baseItem} bg-yellow-400 ${
            selected === 'summer' ? selectedItem : unselectedItem
            }`}>
          <Image src={'/sun.svg'}/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link  
            onClick={() => setSelected('autumn')}
            className={`${baseItem} bg-orange-400 ${
            selected === 'autumn' ? selectedItem : unselectedItem
            }`}>
          <Image src={'/leaf.svg'}/>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link  
            onClick={() => setSelected('winter')}
            className={`${baseItem} rounded-r-lg  bg-cyan-400 ${
            selected === 'winter' ? selectedItem : unselectedItem
            }`}>
          <Image src={'/snowflake.svg'}/>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
