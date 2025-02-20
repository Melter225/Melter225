"use client";

import { useTheme } from "../../contexts/themeContext.tsx";
import BackgroundGrid from "./backgroundGrid.tsx";

export default function Statistics() {
  const { theme } = useTheme();

  return (
    <section id="about" className="relative mt-28 h-[calc(100svh-15rem)]">
      <div className="relative w-full h-full">
        <div className="mt-[7rem]">
          <BackgroundGrid id="fadeGradient" />
        </div>
        {/* <div
          className={`absolute inset-0 bg-gradient-to-b ${
            theme === "dark"
              ? "from-gray-900/90 to-gray-950/90 via-gray-900/90"
              : "from-gray-100/90 to-gray-50/90 via-gray-100/90"
          }`}
        /> */}

        <div className="w-full">
          <h1 className="font-semibold text-5xl text-start ml-6 sm:ml-12 lg:ml-24 mb-16">
            About Me
          </h1>
        </div>
        <div className="flex h-[105%]">
          <div
            className={`flex flex-col flex-grow bg-gradient-to-b ${
              theme === "dark"
                ? "from-gray-900 via-[#111827] to-gray-950"
                : "from-gray-100 via-[#f9fafb] to-gray-50"
            } pt-10 mb-28 border-t-2 ${
              theme === "dark" ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <div className="z-[5] flex flex-row w-full gap-x-5 px-6 sm:px-12 lg:px-24 mt-[-4rem]">
              <div
                className={`flex flex-col w-3/5 ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-200"
                } border-2 ${
                  theme === "dark" ? "border-gray-700" : "border-gray-300"
                } rounded-xl`}
              >
                <p className="pl-5 pt-5 text-2xl font-semibold">About</p>
                <p className="text-sm lg:text-base p-5">
                  I&apos;m Rohan Mahapatra, a passionate coder whose journey
                  began with Python under my grandfather&apos;s guidance.
                  I&apos;ve grown from web development fundamentals to mastering
                  modern frameworks like React, Next.js, and TypeScript. My
                  projects range from nonprofit tools to AI-powered apps and a
                  Rust-based developer browser currently in development.
                  I&apos;ve explored hardware through Raspberry Pi projects and
                  robotics, created games with Unity and Lua, and am currently
                  focusing on competitive programming for USACO.
                </p>
              </div>
              <div
                className={`flex flex-col w-2/5 ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-200"
                } border-2 ${
                  theme === "dark" ? "border-gray-700" : "border-gray-300"
                } rounded-xl`}
              >
                <p className="pl-5 pt-5 text-2xl font-semibold">Hobbies</p>
                <p className="text-sm lg:text-base p-5">
{/*                   Beyond technology, I pursue creative writing, exploring
                  various forms to express my thoughts. I&apos;ve dedicated
                  eight years to playing the tabla, a traditional Indian
                  percussion instrument, connecting me to my heritage. I also
                  practice fencing with my sister, enjoying its blend of
                  strategy and physical discipline. */}
                </p>
                {/* <div
              className={`flex flex-col w-1/2 justify-center ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-200"
              } border-2 ${
                theme === "dark" ? "border-gray-700" : "border-gray-300"
              } rounded-xl`}
            >
              <p className="px-5 pt-[0.875rem] lg:pt-4 text-xl lg:text-2xl font-semibold">
                Projects Created
              </p>
              <p className="pl-5 py-5 text-3xl lg:text-4xl font-semibold">
                111
              </p>
            </div>
            <div
              className={`flex flex-col w-1/2 ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-200"
              } border-2 ${
                theme === "dark" ? "border-gray-700" : "border-gray-300"
              } rounded-xl`}
            >
              <p className="px-5 pt-4 text-xl lg:text-2xl font-semibold">
                Years of Experience
              </p>
              <p className="pl-5 py-5 text-3xl lg:text-4xl font-semibold">6</p>
              <div className="grid">
                <p className="absolute self-end justify-self-end text-sm xs:text-base lg:text-lg pr-4 lg:pr-5 pb-2 lg:pb-5">
                  Since 2018
                </p>
              </div>
            </div>
          </div> */}
                {/* <div className="flex w-full px-6 sm:px-12 lg:px-24 mt-5">
          <div
            className={`flex flex-col text-center w-full ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-200"
            } border-2 ${
              theme === "dark" ? "border-gray-700" : "border-gray-300"
            } rounded-xl`}
          >
            <p className="pl-5 pt-5 text-2xl font-semibold">
              Languages & Tools
            </p>
            <div className="grid grid-cols-6 gap-x-10 gap-y-3 px-3 py-5 sm:p-5 mt-5">
              {languages.map(({ src, alt, width, height, invert }, index) => (
                <div className="flex flex-col items-center" key={`${index}`}>
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
          </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
