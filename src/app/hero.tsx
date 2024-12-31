"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

//cut down on amount of images and make the images not overlap
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundImages = [
    { src: "/PersonalLogo.png", alt: "Personal Logo" },
    { src: "/CodeIcon.png", alt: "Code Icon" },
    { src: "/GitHubIcon_Inverted.png", alt: "GitHub Icon" },
    { src: "/KeyboardIcon.png", alt: "Keyboard Icon" },
    { src: "/CoffeeIcon.png", alt: "Coffee Icon" },
    { src: "/LightbulbIcon.png", alt: "Lightbulb Icon" },
    { src: "/PaintbrushIcon.png", alt: "Paintbrush Icon" },
    { src: "/ComputerIcon.png", alt: "Computer Icon" },
    { src: "/GearIcon.png", alt: "Gear Icon" },
    { src: "/PuzzlePieceIcon.png", alt: "Puzzle Piece Icon" },
    { src: "/HackerIcon.png", alt: "Hacker Icon" },
    { src: "/TerminalIcon.png", alt: "Terminal Icon" },
    { src: "/ReactIcon_Inverted.png", alt: "React Icon" },
    { src: "/CSharpIcon_Inverted.png", alt: "C# Icon" },
    { src: "/CSSIcon_Inverted.png", alt: "CSS Icon" },
    { src: "/HTMLIcon_Inverted.png", alt: "HTML Icon" },
    { src: "/JavaScriptIcon_Inverted.png", alt: "JavaScript Icon" },
    { src: "/LuaIcon_Inverted.png", alt: "Lua Icon" },
    { src: "/NodeJSIcon_Inverted.png", alt: "NodeJS Icon" },
    { src: "/SQLIcon.png", alt: "SQL Icon" },
    { src: "/PythonIcon_Inverted.png", alt: "Python Icon" },
    { src: "/NextJSIcon_Inverted.png", alt: "NextJS Icon" },
    { src: "/TypeScriptIcon_Inverted.png", alt: "Typescript Icon" },
    { src: "/TailwindCSSIcon_Inverted.png", alt: "Tailwind CSS Icon" },
    { src: "/RaspberryPiIcon_Inverted.png", alt: "Raspberry Pi Icon" },
    { src: "/CibarLogo.png", alt: "Cibar Icon" },
    { src: "/QuixLogo.png", alt: "Quix Icon" },
    { src: "/DevXIcon.png", alt: "DevX Icon" },
  ];

  const backgroundDelay = (index: number) => {
    const updatedDelay = 2 + index * 0.07;
    return updatedDelay;
  };

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (!containerRef.current) return;

      const scrollContainer =
        containerRef.current.querySelector(".overflow-y-auto");
      const backgroundContainer =
        containerRef.current.querySelector(".background-text");

      if (!scrollContainer || !backgroundContainer) return;

      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;

      if (
        (e.deltaY > 0 && scrollTop < scrollHeight - clientHeight) ||
        (e.deltaY < 0 &&
          scrollTop < scrollHeight - clientHeight &&
          scrollTop > 0) ||
        (e.deltaY < 0 && window.scrollY === 0)
      ) {
        e.preventDefault();
        scrollContainer.scrollTop += e.deltaY;
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <section id="home">
      <div ref={containerRef} className="flex flex-col w-full h-[50.5rem]">
        {/* <p>Placeholder for hero</p> */}
        <div className="relative h-[45.5rem] overflow-y-auto mt-20 scrollbar-hide scroll-smooth">
          <div className="background-text absolute w-full h-[91rem] overflow-hidden scroll-smooth">
            {Array.from({ length: 550 }).map((_, index) => {
              const randomIndex = Math.floor(
                Math.random() * backgroundImages.length
              );
              const randomSize = Math.floor(Math.random() * 31) + 70;

              return (
                <motion.div
                  key={`${index}`}
                  className="absolute overflow-hidden select-none"
                  aria-hidden="true"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  transition={{
                    duration: 0.07,
                    delay: backgroundDelay(index),
                    ease: "easeIn",
                  }}
                >
                  <Image
                    src={`${backgroundImages[randomIndex].src}`}
                    alt={`${backgroundImages[randomIndex].alt}`}
                    width={randomSize}
                    height={randomSize}
                    className="blur-[1px] opacity-[0.4] mix-blend-difference filter contrast-125 brightness-90 hover:opacity-[0.6] hover:cursor-pointer transition-opacity duration-200 ease-in-out"
                  ></Image>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="mt-[-29.2rem] z-10">
          <div className="flex flex-col items-center justify-center mb-2">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.25, ease: "easeIn" }}
            >
              Rohan Mahapatra
            </motion.h1>
          </div>
          <div className="flex justify-center">
            <div>
              <motion.span
                className="flex absolute border w-fit mx-auto py-4 text-center blur-xl box-content text-4xl sm:text-5xl md:text-6xl !leading-[5.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 select-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              >
                Remaking the digital experience
              </motion.span>
              <motion.h1
                className="flex relative top-0 w-fit h-auto py-4 items-center justify-center text-center text-4xl sm:text-5xl md:text-6xl !leading-[5.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 select-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              >
                Remaking the digital experience
              </motion.h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
