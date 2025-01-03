"use client";

import Image from "next/image";
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/themeContext.tsx";

interface BackgroundImage {
  src: string;
  alt: string;
}

interface IconBackground {
  index: number;
  src: string;
  alt: string;
  size: number;
  position: {
    top: string;
    left: string;
  };
}

export default function Hero() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [iconCount, setIconCount] = useState(350);

  const backgroundImages = useMemo<BackgroundImage[]>(
    () => [
      { src: "/PersonalLogo.png", alt: "Personal Logo" },
      { src: "/CodeIcon.png", alt: "Code Icon" },
      {
        src: `${
          theme === "dark" ? "/GitHubIcon_Inverted.png" : "/GitHubIcon.png"
        }`,
        alt: "GitHub Icon",
      },
      { src: "/KeyboardIcon.png", alt: "Keyboard Icon" },
      { src: "/CoffeeIcon.png", alt: "Coffee Icon" },
      { src: "/LightbulbIcon.png", alt: "Lightbulb Icon" },
      { src: "/PaintbrushIcon.png", alt: "Paintbrush Icon" },
      { src: "/ComputerIcon.png", alt: "Computer Icon" },
      { src: "/GearIcon.png", alt: "Gear Icon" },
      { src: "/PuzzlePieceIcon.png", alt: "Puzzle Piece Icon" },
      { src: "/HackerIcon.png", alt: "Hacker Icon" },
      { src: "/TerminalIcon.png", alt: "Terminal Icon" },
      {
        src: `${
          theme === "dark" ? "/ReactIcon_Inverted.png" : "/ReactIcon.png"
        }`,
        alt: "React Icon",
      },
      {
        src: `${
          theme === "dark" ? "/CSharpIcon_Inverted.png" : "/CSharpIcon.png"
        }`,
        alt: "C# Icon",
      },
      {
        src: `${theme === "dark" ? "/CSSIcon_Inverted.png" : "/CSSIcon.png"}`,
        alt: "CSS Icon",
      },
      {
        src: `${theme === "dark" ? "/HTMLIcon_Inverted.png" : "/HTMLIcon.png"}`,
        alt: "HTML Icon",
      },
      {
        src: `${
          theme === "dark"
            ? "/JavaScriptIcon_Inverted.png"
            : "/JavaScriptIcon.png"
        }`,
        alt: "JavaScript Icon",
      },
      {
        src: `${theme === "dark" ? "/LuaIcon_Inverted.png" : "/LuaIcon.png"}`,
        alt: "Lua Icon",
      },
      {
        src: `${
          theme === "dark" ? "/NodeJSIcon_Inverted.png" : "/NodeJSIcon.png"
        }`,
        alt: "NodeJS Icon",
      },
      { src: "/SQLIcon.png", alt: "SQL Icon" },
      {
        src: `${
          theme === "dark" ? "/PythonIcon_Inverted.png" : "/PythonIcon.png"
        }`,
        alt: "Python Icon",
      },
      {
        src: `${
          theme === "dark" ? "/NextJSIcon_Inverted.png" : "/NextJSIcon.png"
        }`,
        alt: "NextJS Icon",
      },
      {
        src: `${
          theme === "dark"
            ? "/TypeScriptIcon_Inverted.png"
            : "/TypeScriptIcon.png"
        }`,
        alt: "Typescript Icon",
      },
      {
        src: `${
          theme === "dark"
            ? "/TailwindCSSIcon_Inverted.png"
            : "/TailwindCSSIcon.png"
        }`,
        alt: "Tailwind CSS Icon",
      },
      {
        src: `${
          theme === "dark"
            ? "/RaspberryPiIcon_Inverted.png"
            : "/RaspberryPiIcon.png"
        }`,
        alt: "Raspberry Pi Icon",
      },
      { src: "/CibarLogo.png", alt: "Cibar Icon" },
      { src: "/QuixLogo.png", alt: "Quix Icon" },
      { src: "/DevXIcon.png", alt: "DevX Icon" },
    ],
    [theme]
  );

  const generateIcons = useCallback(() => {
    return Array.from({ length: iconCount }).map((_, index): IconBackground => {
      const randomIndex = Math.floor(Math.random() * backgroundImages.length);
      const randomSize = Math.floor(Math.random() * 31) + 70;

      return {
        index,
        src: backgroundImages[randomIndex].src,
        alt: backgroundImages[randomIndex].alt,
        size: randomSize,
        position: {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        },
      };
    });
  }, [iconCount, backgroundImages]);

  const [icons, setIcons] = useState<IconBackground[]>(() => generateIcons());

  const backgroundDelay = useCallback((index: number) => {
    return 2 + index * 0.07;
  }, []);

  useEffect(() => {
    setIcons(generateIcons());
  }, [iconCount, generateIcons]);

  const debounce = useCallback(
    (func: () => void, wait: number): (() => void) => {
      let timeout: NodeJS.Timeout;

      return () => {
        const later = () => {
          clearTimeout(timeout);
          func();
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },
    []
  );

  useEffect(() => {
    const updateIconCount = () => {
      if (window.innerWidth < 480) {
        setIconCount(100);
      } else if (window.innerWidth < 640) {
        setIconCount(150);
      } else if (window.innerWidth < 768) {
        setIconCount(250);
      } else if (window.innerWidth < 1024) {
        setIconCount(300);
      } else {
        setIconCount(350);
      }
    };

    const debouncedResize = debounce(updateIconCount, 250);
    window.addEventListener("resize", debouncedResize);
    return () => window.removeEventListener("resize", debouncedResize);
  }, [debounce]);

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
        (e.deltaY < 0 && window != undefined && window.scrollY === 0)
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
    <section
      id="home"
      className={`${theme === "dark" ? "" : "bg-gray-200"} scroll-smooth`}
    >
      <div
        ref={containerRef}
        className="flex flex-col w-full h-[50.5rem] scroll-smooth"
      >
        {/* <p>Placeholder for hero</p> */}
        <div className="relative h-[45.5rem] overflow-y-auto mt-20 scrollbar-hide">
          <div
            className="background-text absolute w-full h-[120rem] overflow-hidden"
            style={{
              transform: `translateY(${
                typeof window !== "undefined" ? window.scrollY : 0
              }px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            {icons.map(({ index, src, alt, size, position }) => (
              <motion.div
                key={index}
                className="absolute overflow-hidden select-none"
                aria-hidden="true"
                style={{
                  top: position.top,
                  left: position.left,
                  willChange: "transform, opacity",
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
                  src={src}
                  alt={alt}
                  width={size}
                  height={size}
                  className="blur-[1px] opacity-[0.3] mix-blend-difference filter contrast-125 brightness-90 hover:opacity-[0.5] hover:cursor-pointer transition-opacity duration-200 ease-in-out"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-[-29.2rem] z-10">
          <div className="flex flex-col items-center justify-center text-center mb-2">
            <motion.h1
              className={`text-[3.25rem] sm:text-6xl md:text-7xl !leading-[1.2] font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${
                theme === "dark"
                  ? "from-gray-200 to-gray-500"
                  : "from-gray-500 to-gray-800"
              }`}
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
                className="flex absolute border w-fit mx-auto py-4 text-center blur-xl box-content text-[2.5rem] sm:text-5xl md:text-6xl !leading-[1.3] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 select-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              >
                Remaking the digital experience
              </motion.span>
              <motion.h1
                className="flex relative top-0 w-fit h-auto py-4 items-center justify-center text-center text-[2.5rem] sm:text-5xl md:text-6xl !leading-[1.3] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 select-auto"
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
