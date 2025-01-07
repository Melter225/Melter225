"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { useTheme } from "../../contexts/themeContext.tsx";

export default function About() {
  const { theme } = useTheme();
  const frontendLanguages = [
    {
      src: "/HTMLIcon.png",
      alt: "HTML",
      width: 30,
      height: 30,
      invert: true,
    },
    {
      src: "/CSSIcon.png",
      alt: "CSS",
      width: 30,
      height: 30,
      invert: true,
    },
    {
      src: "/ReactIcon.png",
      alt: "React",
      width: 30,
      height: 30,
      invert: true,
    },
    {
      src: "/NextJSIcon.png",
      alt: "NextJS",
      width: 30,
      height: 30,
      invert: true,
    },
    {
      src: "/TypeScriptIcon.png",
      alt: "TypeScript",
      width: 30,
      height: 30,
      invert: true,
    },
    {
      src: "/ReactIcon.png",
      alt: "React Native",
      width: 30,
      height: 30,
      invert: true,
    },
  ];

  const backendLanguages = [
    {
      src: "/PythonIcon.png",
      alt: "Python",
      width: 30,
      height: 30,
      invert: true,
    },
    {
      src: "/NodeJSIcon.png",
      alt: "NodeJS",
      width: 35,
      height: 35,
      invert: true,
    },
    {
      src: "/LuaIcon.png",
      alt: "Lua",
      width: 30,
      height: 30,
      invert: true,
    },
    {
      src: "/KotlinIcon.png",
      alt: "Kotlin",
      width: 30,
      height: 30,
      invert: true,
    },
    {
      src: "/C++Icon.png",
      alt: "C++",
      width: 39,
      height: 39,
      invert: true,
    },
    {
      src: "/RustIcon.png",
      alt: "Rust",
      width: 30,
      height: 30,
      invert: true,
    },
    {
      src: "/JavaScriptIcon.png",
      alt: "JavaScript",
      width: 30,
      height: 30,
      invert: true,
    },
    {
      src: "/NextJSIcon.png",
      alt: "NextJS",
      width: 30,
      height: 30,
      invert: true,
    },
    {
      src: "/TypeScriptIcon.png",
      alt: "TypeScript",
      width: 30,
      height: 30,
      invert: true,
    },
  ];

  const databaseLanguages = [
    {
      src: "/PostgreSQLIcon.png",
      alt: "PostgreSQL",
      width: 32,
      height: 32,
      invert: true,
    },
    {
      src: "/SQLiteIcon.png",
      alt: "SQLite",
      width: 85,
      height: 85,
      invert: true,
    },
    {
      src: "/PygameIcon.png",
      alt: "MongoDB Query Language",
      width: 120,
      height: 120,
      invert: false,
    },
  ];

  const software = [
    {
      src: "/GitHubIcon.png",
      alt: "GitHub",
      width: 30,
      height: 30,
      invert: true,
    },
    {
      src: "/FigmaIcon.png",
      alt: "Figma",
      width: 40,
      height: 40,
      invert: true,
    },
    {
      src: "/LogoIcon.png",
      alt: "Blender",
      width: 40,
      height: 40,
      invert: true,
    },
    {
      src: "/UnityIcon.png",
      alt: "Unity",
      width: 50,
      height: 50,
      invert: true,
    },
    {
      src: "/TinkercadIcon.png",
      alt: "Tinkercad",
      width: 32,
      height: 32,
      invert: true,
    },
  ];

  const tools = [
    {
      src: "/TailwindCSSIcon.png",
      alt: "Tailwind CSS",
      width: 30,
      height: 30,
      invert: true,
    },
    {
      src: "/PrismaIcon.png",
      alt: "Prisma",
      width: 30,
      height: 30,
      invert: true,
    },
    {
      src: "/RaspberryPiIcon.png",
      alt: "Raspberry Pi",
      width: 40,
      height: 40,
      invert: true,
    },
  ];

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      console.log(e.deltaY);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <section
      id="statistics"
      className="flex flex-col mt-20 h-[calc(100svh+23rem)]"
    >
      {/* <div className="w-full text-center">
        <h1 className="font-semibold text-5xl">Statistics</h1>
      </div> */}
      <div className="flex flex-col flex-grow items-center justify-center">
        <div className="relative flex flex-row gap-x-3 sm:gap-x-5 w-full px-6 sm:px-12 lg:px-24">
          <div
            className={`relative flex flex-col w-1/2 rounded-2xl border-2 ${
              theme === "dark" ? "border-neutral-800" : "border-neutral-400"
            } items-center justify-center py-5 ml-0`}
          >
            {/* <div
              className={`absolute w-full h-full border-l-2 ${
                theme === "dark" ? "border-neutral-800" : "border-neutral-400"
              }`}
            >
              <p>test</p>
            </div> */}
            <div className="relative flex flex-row items-center justify-center w-full">
              <div
                className={`z-[-5] absolute h-px w-full ${
                  theme === "dark" ? "bg-neutral-800" : "bg-neutral-400"
                } top-1/2 transform`}
              ></div>
              <div className="flex flex-row w-full mx-4">
                <div className="flex items-center w-auto h-auto mr-0 sm:mr-4">
                  <div className="relative flex w-full h-full">
                    <div
                      className={`z-[-5] absolute w-px h-[calc(100%+8rem)] sm:h-[calc(100%+8.25rem)] lg:h-[calc(100%+8.75rem)] ${
                        theme === "dark" ? "bg-neutral-800" : "bg-neutral-400"
                      } left-[calc(50%+22.5px)] transform mt-[-2.25rem]`}
                    ></div>
                  </div>
                  <Image
                    className="invert absolute mt-0 ml-0 w-[40px] h-[40px] sm:w-[47px] sm:h-[47px]"
                    src="/GitHubIcon.png"
                    alt="Projects Icon"
                    width={47}
                    height={47}
                  ></Image>
                </div>
                <div className="w-full bg-gray-800 px-4 rounded-full">
                  <h1 className="font-semibold text-xl lg:text-2xl py-0.5 ml-8">
                    Projects
                  </h1>
                </div>
              </div>
            </div>
            <h1 className="mt-5 font-bold text-3xl sm:text-4xl lg:text-5xl">
              111+
            </h1>
          </div>
          <div
            className={`relative flex flex-col w-1/2 rounded-2xl border-2 ${
              theme === "dark" ? "border-neutral-800" : "border-neutral-400"
            } items-center justify-center py-5 ml-0`}
          >
            {/* <div
              className={`absolute w-full h-full border-l-2 ${
                theme === "dark" ? "border-neutral-800" : "border-neutral-400"
              }`}
            >
              <p>test</p>
            </div> */}
            <div className="relative flex flex-row items-center justify-center w-full">
              <div
                className={`z-[-5] absolute h-px w-full ${
                  theme === "dark" ? "bg-neutral-800" : "bg-neutral-400"
                } top-1/2 transform`}
              ></div>
              <div className="flex flex-row w-full mx-4">
                <div className="flex items-center w-auto h-auto mr-0 sm:mr-4">
                  <div className="relative flex w-full h-full">
                    <div
                      className={`z-[-5] absolute w-px h-[calc(100%+7.75rem)] sm:h-[calc(100%+8rem)] lg:h-[calc(100%+8.5rem)] ${
                        theme === "dark" ? "bg-neutral-800" : "bg-neutral-400"
                      } left-[calc(50%+22.5px)] transform mt-[-1.25rem]`}
                    ></div>
                  </div>
                  <Image
                    className="invert absolute mt-0 ml-0 w-[40px] h-[40px] sm:w-[47px] sm:h-[47px]"
                    src="/GitHubIcon.png"
                    alt="Projects Icon"
                    width={47}
                    height={47}
                  ></Image>
                </div>
                <div className="w-full bg-gray-800 px-4 rounded-full">
                  <h1 className="font-semibold text-xl lg:text-2xl py-0.5 ml-8">
                    Experience
                  </h1>
                </div>
              </div>
            </div>
            <h1 className="mt-5 mb-7 font-bold text-3xl sm:text-4xl lg:text-5xl">
              6 years
            </h1>
            <div className="grid">
              <p className="absolute self-end justify-self-end right-0 bottom-0 text-sm xs:text-base lg:text-lg pr-4 pb-2">
                Since 2018
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-x-12 lg:gap-x-28 w-full px-6 sm:px-12 lg:px-24 mt-16">
          <div className="hidden md:block flex-shrink-0 pb-5">
            <p className="text-4xl font-semibold whitespace-nowrap">
              Skills & Tools
            </p>
          </div>
          <div className="flex flex-col flex-grow">
            <div className="flex flex-col">
              <div className="mb-8">
                <label className="font-semibold text-3xl">Languages</label>
              </div>
              <div className="flex flex-row gap-x-10">
                <div className="flex items-center">
                  <label
                    className={`text-lg ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Frontend
                  </label>
                </div>
                <div
                  className={`flex flex-col text-center w-full border-2 ${
                    theme === "dark" ? "border-gray-700" : "border-gray-300"
                  } rounded-xl`}
                >
                  <div className="grid grid-cols-3 gap-x-10 gap-y-3 px-3 py-5 sm:p-5 items-center">
                    {frontendLanguages.map(
                      ({ src, alt, width, height, invert }, index) => (
                        <div
                          className="flex flex-col items-center"
                          key={`${index}`}
                        >
                          <Image
                            className={`${
                              theme === "dark"
                                ? `${invert === true ? "invert" : "invert-0"}`
                                : "invert-0"
                            }`}
                            src={src}
                            alt={`${alt} Icon`}
                            width={width}
                            height={height}
                          />
                          <p className="hidden sm2:block text-xs sm:text-sm lg:text-base">
                            {alt}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-x-10 mt-5">
                <div className="flex items-center">
                  <label
                    className={`text-lg ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Backend
                  </label>
                </div>
                <div
                  className={`flex flex-col text-center w-full border-2 ${
                    theme === "dark" ? "border-gray-700" : "border-gray-300"
                  } rounded-xl`}
                >
                  <div className="grid grid-cols-3 gap-x-10 gap-y-3 px-3 py-5 sm:p-5 items-center">
                    {backendLanguages.map(
                      ({ src, alt, width, height, invert }, index) => (
                        <div
                          className="flex flex-col items-center"
                          key={`${index}`}
                        >
                          <Image
                            className={`${
                              theme === "dark"
                                ? `${invert === true ? "invert" : "invert-0"}`
                                : "invert-0"
                            }`}
                            src={src}
                            alt={`${alt} Icon`}
                            width={width}
                            height={height}
                          />
                          <p className="hidden sm2:block text-xs sm:text-sm lg:text-base">
                            {alt}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-x-7 mt-5">
                <div className="flex items-center">
                  <label
                    className={`text-lg ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Database
                  </label>
                </div>
                <div
                  className={`flex flex-col text-center w-full border-2 ${
                    theme === "dark" ? "border-gray-700" : "border-gray-300"
                  } rounded-xl`}
                >
                  <div className="grid grid-cols-3 gap-x-10 gap-y-3 px-3 py-5 sm:p-5 items-center">
                    {databaseLanguages.map(
                      ({ src, alt, width, height, invert }, index) => (
                        <div
                          className="flex flex-col items-center"
                          key={`${index}`}
                        >
                          <Image
                            className={`${
                              theme === "dark"
                                ? `${invert === true ? "invert" : "invert-0"}`
                                : "invert-0"
                            }`}
                            src={src}
                            alt={`${alt} Icon`}
                            width={width}
                            height={height}
                          />
                          <p className="hidden sm2:block text-xs sm:text-sm lg:text-base">
                            {alt}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-10">
              <div className="mb-5">
                <label className="font-semibold text-2xl">Software</label>
              </div>
              <div
                className={`flex flex-col text-center w-full border-2 ${
                  theme === "dark" ? "border-gray-700" : "border-gray-300"
                } rounded-xl`}
              >
                <div className="grid grid-cols-5 gap-x-10 gap-y-3 px-3 py-5 sm:p-5 items-center">
                  {software.map(
                    ({ src, alt, width, height, invert }, index) => (
                      <div
                        className="flex flex-col items-center"
                        key={`${index}`}
                      >
                        <Image
                          className={`${
                            theme === "dark"
                              ? `${invert === true ? "invert" : "invert-0"}`
                              : "invert-0"
                          }`}
                          src={src}
                          alt={`${alt} Icon`}
                          width={width}
                          height={height}
                        />
                        <p className="hidden sm2:block text-xs sm:text-sm lg:text-base">
                          {alt}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-10">
              <div className="mb-5">
                <label className="font-semibold text-2xl">Tools</label>
              </div>
              <div
                className={`flex flex-col text-center w-full border-2 ${
                  theme === "dark" ? "border-gray-700" : "border-gray-300"
                } rounded-xl`}
              >
                <div className="grid grid-cols-3 gap-x-10 gap-y-3 px-3 py-5 sm:p-5 items-center">
                  {tools.map(({ src, alt, width, height, invert }, index) => (
                    <div
                      className="flex flex-col items-center"
                      key={`${index}`}
                    >
                      <Image
                        className={`${
                          theme === "dark"
                            ? `${invert === true ? "invert" : "invert-0"}`
                            : "invert-0"
                        }`}
                        src={src}
                        alt={`${alt} Icon`}
                        width={width}
                        height={height}
                      />
                      <p className="hidden sm2:block text-xs sm:text-sm lg:text-base">
                        {alt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
