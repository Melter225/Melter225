"use client";

import Image from "next/image";
import { useTheme } from "../../contexts/themeContext.tsx";
import BackgroundGrid from "./backgroundGrid.tsx";

export default function Awards() {
  const { theme } = useTheme();
  const awards = [
    { src: "/test1", alt: "1" },
    { src: "/test2", alt: "2" },
    { src: "/test3", alt: "3" },
    { src: "/test4", alt: "4" },
    { src: "/test5", alt: "5" },
    { src: "/test6", alt: "6" },
    { src: "/test7", alt: "7" },
    { src: "/test8", alt: "8" },
    { src: "/test9", alt: "9" },
    { src: "/test10", alt: "10" },
  ];

  console.log(theme);

  return (
    <section id="awards" className="relative">
      <div
        className={`absolute top-0 left-0 right-0 h-24 z-10 hover:cursor-pointer bg-gradient-to-b ${
          theme === "dark" ? "from-gray-950" : "from-gray-200"
        } to-transparent`}
      />
      <div className="inline-flex flex-nowrap w-full overflow-x-hidden">
        <div
          className={`row-fin flex w-[400rem] h-[17rem] ${
            theme === "dark" ? "bg-gray-800" : "bg-gray-200"
          } py-20 items-center justify-center animate-infinite-scroll-awards pause hover:cursor-pointer gap-x-5`}
        >
          <BackgroundGrid
            id="fadeGradient"
            marginTop={0}
            height={"100%"}
            darkColor={"text-gray-600"}
            lightColor={"text-gray-400"}
          />
          {awards.map(({ src, alt }, index) => (
            <div
              key={`${index}`}
              className="flex justify-center items-center w-[20rem] h-[17rem]"
            >
              <Image src={src} alt={alt} width={30} height={20} />
            </div>
          ))}
          {awards.map(({ src, alt }, index) => (
            <div
              key={`${index}`}
              className="flex justify-center items-center w-[20rem] h-[17rem]"
            >
              <Image src={src} alt={alt} width={30} height={20} />
            </div>
          ))}
        </div>
      </div>
      <div
        className={`absolute bottom-0 left-0 right-0 h-24 z-10 hover:cursor-pointer bg-gradient-to-t ${
          theme === "dark" ? "from-gray-950" : "from-gray-200"
        } to-transparent`}
      />{" "}
    </section>
  );
}
