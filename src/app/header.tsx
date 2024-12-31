"use client";

import Image from "next/image";
import { useTheme } from "../../hooks/useTheme";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const navItems = [
    { id: "home", label: "Home" },
    { id: "awards", label: "Awards" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const rem = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
      if (sectionId != "contact") {
        const offsetTop = element.offsetTop - 6 * rem;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      } else if (sectionId === "contact") {
        const offsetTop = element.offsetTop + 2 * rem;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="flex z-50 fixed w-full h-20 items-center bg-gray-950/50 shadow-lg backdrop-blur-md border-2 border-gray-950 border-b-neutral-800">
      <div className="ml-5">
        <Image
          src="/PersonalLogo.png"
          alt="Personal Logo"
          width={52}
          height={52}
        />
      </div>
      <div className="flex mx-auto justify-center items-center gap-x-8 rounded-full border-2 border-neutral-800 w-[45rem] h-10">
        {navItems.map(({ id, label }) => (
          <div key={id}>
            <p
              onClick={() => scrollToSection(id)}
              className="hover:cursor-pointer hover:text-300"
            >
              {label}
            </p>
          </div>
        ))}
      </div>
      <div className="mr-5">
        <button
          onClick={toggleTheme}
          className="relative w-20 h-10 rounded-full bg-gray-700 transition-colors duration-200 ease-in-out"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          <div
            className={`absolute left-1 top-1 w-8 h-8 rounded-full bg-gray-800 transition-transform duration-300 ease-in-out ${
              theme === "dark" ? "translate-x-10" : ""
            } flex items-center justify-center`}
          >
            {theme === "light" ? (
              <SunIcon className="w-[1.375rem] h-[1.375rem] text-yellow-400" />
            ) : (
              <MoonIcon className="w-4 h-4 text-blue-300" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
}
