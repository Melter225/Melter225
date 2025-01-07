"use client";

import Image from "next/image";
import { useTheme } from "../../contexts/themeContext.tsx";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/outline";
import React, { useState, useEffect, useLayoutEffect } from "react";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "awards", label: "Awards" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  const expandHeader = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useLayoutEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const headerMenu = document.querySelector(".header-menu");
      const menuButton = document.querySelector(".menu-button");
      if (
        menuOpen &&
        headerMenu &&
        !headerMenu.contains(event.target as Node) &&
        !menuButton?.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const rem = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
      let offsetTop = element.offsetTop;
      if (sectionId !== "contact") {
        offsetTop -= 6 * rem;
      } else {
        offsetTop += 2 * rem;
      }
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="grid">
      <div
        className={`flex z-50 fixed w-full h-20 items-center ${
          theme === "dark" ? "bg-gray-950/50" : "bg-gray-50/50"
        } shadow-lg backdrop-blur-lg border-b-2 border-gray-950 ${
          theme === "dark" ? "border-neutral-800" : "border-neutral-400"
        }`}
      >
        <div className="ml-5">
          <Image
            src="/PersonalLogo.png"
            alt="Personal Logo"
            width={52}
            height={52}
          />
        </div>
        <div
          className={`hidden md:flex flex-grow md:mx-[3rem] lg:mx-[8rem] md:text-sm lg:text-base justify-center items-center gap-x-8 rounded-full border-2 ${
            theme === "dark" ? "border-neutral-800" : "border-neutral-400"
          } h-10`}
        >
          {navItems.map(({ id, label }) => (
            <div key={id}>
              <p
                onClick={() => scrollToSection(id)}
                className={`hover:cursor-pointer ${
                  theme === "dark"
                    ? "hover:text-gray-300"
                    : "hover:text-gray-900"
                }`}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
        <div className="grid w-full md:w-auto">
          <div className="justify-self-end md:justify-self-auto mr-8 md:mr-5">
            <button
              onClick={toggleTheme}
              className={`relative w-20 h-10 rounded-full ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-300"
              } transition-colors duration-200 ease-in-out`}
              aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
              } mode`}
            >
              <div
                className={`absolute left-1 top-1 w-8 h-8 rounded-full ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-400"
                } transition-transform duration-300 ease-in-out ${
                  theme === "dark" ? "translate-x-10" : ""
                } flex items-center justify-center`}
              >
                {theme === "light" ? (
                  <SunIcon className="w-[1.375rem] h-[1.375rem] text-yellow-400 drop-shadow-[0_0_3px_rgba(250,204,21,0.4)]" />
                ) : (
                  <MoonIcon className="w-4 h-4 text-blue-300" />
                )}
              </div>
            </button>
          </div>
        </div>
        <div
          className="menu-button block md:hidden mr-5 hover:cursor-pointer"
          onClick={expandHeader}
        >
          <Bars3Icon className="h-9 w-9 text-gray-300" />
        </div>
      </div>
      {menuOpen && (
        <div className="header-menu z-40 fixed flex md:hidden top-20 right-0 w-full h-[calc(100svh-5rem)]">
          <div className="flex flex-col flex-grow justify-center w-full backdrop-blur-md bg-gray-950/70 p-5">
            <div className="grid gap-y-5 place-items-center">
              {navItems.map(({ id, label }, index) => (
                <p
                  key={`${index}`}
                  className="text-xl w-fit hover:cursor-pointer hover:text-gray-300 transition-colors duration-200"
                  onClick={() => {
                    scrollToSection(id);
                    setMenuOpen(false);
                  }}
                >
                  {label}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
