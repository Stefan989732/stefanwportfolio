'use client'

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Image
} from "@heroui/react";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Flower, Leaf, Snowflake, Sun } from 'lucide-react';


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

  useEffect(() => {
    const stored = localStorage.getItem("season");

    let initialSeason = "spring";

    if (stored) {
      initialSeason = stored;
    } else {
      const month = new Date().getMonth();

      if (month >= 2 && month <= 4) initialSeason = "spring";
      else if (month >= 5 && month <= 7) initialSeason = "summer";
      else if (month >= 8 && month <= 10) initialSeason = "autumn";
      else initialSeason = "winter";
    }

    setSelected(initialSeason);
    document.documentElement.setAttribute("data-season", initialSeason);
  }, []);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = prefersDark ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  // Sync whenever season changes
  useEffect(() => {
    document.documentElement.setAttribute("data-season", selected);
    localStorage.setItem("season", selected);
  }, [selected]);

  return (
    <Navbar className="bg-gray-800 p-4 flex justify-between items-center fixed text-white z-1">
      {/* <NavbarContent>
        <Image src={'/StefanWurpel.jpg'} alt="Stefan Wurpel" width={150} height={150} 
        className="absolute rounded-xl border border-gray-400 shadow-xl/30"/>
      </NavbarContent> */}
      <NavbarContent className="hidden xl:flex items-center gap-4" justify="center">
        <Link href="/">
          <NavbarItem isActive={pathname === "/"} className={`${linkBase} ${pathname === "/" ? active : inactive}`}>Home</NavbarItem>
        </Link>
        <Link aria-current="page" href="/projects">
          <NavbarItem isActive={pathname === "/projects"} className={`${linkBase} ${pathname === "/projects" ? active : inactive}`}>Projecten</NavbarItem>
        </Link>
        <Link color="foreground" href="/experience">
          <NavbarItem isActive={pathname === "/experience"} className={`${linkBase} ${pathname === "/experience" ? active : inactive}`}>ervaring</NavbarItem>
        </Link>
        <Link color="foreground" href="/aboutme">
          <NavbarItem isActive={pathname === "/aboutme"} className={`${linkBase} ${pathname === "/aboutme" ? active : inactive}`}>Over mij</NavbarItem>
        </Link>
        <Link color="foreground" href="/contact">
          <NavbarItem isActive={pathname === "/contact"} className={`${linkBase} ${pathname === "/contact" ? active : inactive}`}>Contact</NavbarItem>
        </Link>
      </NavbarContent>
      <NavbarContent className="shadow-xl/30 sm:flex gap-0">
        <NavbarItem>
          <Link
            onClick={() => setSelected('spring')}
            className={`${baseItem} rounded-s-lg bg-pink-400 ${selected === 'spring' ? selectedItem : unselectedItem
              }`}>
            <Flower />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            onClick={() => setSelected('summer')}
            className={`${baseItem} bg-yellow-400 ${selected === 'summer' ? selectedItem : unselectedItem
              }`}>
            <Sun />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            onClick={() => setSelected('autumn')}
            className={`${baseItem} bg-orange-400 ${selected === 'autumn' ? selectedItem : unselectedItem
              }`}>
            <Leaf />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            onClick={() => setSelected('winter')}
            className={`${baseItem} rounded-r-lg  bg-cyan-400 ${selected === 'winter' ? selectedItem : unselectedItem
              }`}>
            <Snowflake />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
