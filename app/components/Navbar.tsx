'use client'

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link
} from "@heroui/react";

import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Flower, Leaf, Snowflake, Sun, Menu, X } from "lucide-react";


export default function Home() {
  const pathname = usePathname();

    /* ================= STATE ================= */

  const [selected, setSelected] = useState("spring");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  /* ================= NAV ITEMS ================= */

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projecten", href: "/projects" },
    { label: "Ervaring", href: "/experience" },
    { label: "Over mij", href: "/aboutme" },
    { label: "Contact", href: "/contact" },
  ];

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

  useEffect(() => {
  const checkScreen = () => {
    setIsMobile(window.innerWidth < 1024); // Tailwind lg breakpoint
  };

  checkScreen(); // run once on load

  window.addEventListener("resize", checkScreen);

  return () => window.removeEventListener("resize", checkScreen);
}, []);

  return (
    <Navbar className="bg-gray-800 p-4 flex fixed text-white z-50">
       <NavbarContent justify="start">

        {/* ===== IF MOBILE ===== */}
        {isMobile ? (
          <>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {menuOpen && (
              <div className="absolute top-full left-0 w-screen bg-gray-800 flex flex-col p-4 shadow-lg">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`p-3 rounded-lg ${
                      pathname === item.href
                        ? "text-yellow-400"
                        : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </>
        ) : (
          /* ===== ELSE DESKTOP ===== */
          <div className="flex gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <NavbarItem
                  className={`${linkBase} ${
                    pathname === item.href ? active : inactive
                  }`}
                >
                  {item.label}
                </NavbarItem>
              </Link>
            ))}
          </div>
        )}
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
