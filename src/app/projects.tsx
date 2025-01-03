"use client";

// import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";
import { useTheme } from "../../contexts/themeContext.tsx";

export default function Projects() {
  const { theme } = useTheme();
  const secondProjectRef = useRef<HTMLDivElement>(null);
  const thirdProjectRef = useRef<HTMLDivElement>(null);

  const darkGradient = `linear-gradient(to bottom,
    transparent 0%,
    rgba(17, 24, 39, 0.2) 5%,
    rgba(17, 24, 39, 0.5) 10%,
    rgba(17, 24, 39, 0.8) 15%,
    rgba(17, 24, 39, 1) 20%,
    rgba(17, 24, 39, 1) 80%,
    rgba(17, 24, 39, 0.8) 85%,
    rgba(17, 24, 39, 0.5) 90%,
    rgba(17, 24, 39, 0.2) 95%,
    transparent 100%
  )`;

  const lightGradient = `linear-gradient(to bottom,
    transparent 0%,
    rgba(209, 213, 219, 0.2) 5%,
    rgba(209, 213, 219, 0.5) 10%,
    rgba(209, 213, 219, 0.8) 15%,
    rgba(209, 213, 219, 1) 20%,
    rgba(209, 213, 219, 1) 80%,
    rgba(209, 213, 219, 0.8) 85%,
    rgba(209, 213, 219, 0.5) 90%,
    rgba(209, 213, 219, 0.2) 95%,
    transparent 100%
  )`;

  const projects = [
    {
      title: "DevX",
      description: `Description Description Description Description Description
            Description Description Description Description Description
            Description Description Description Description Description
            Description Description Description Description Description`,
    },
    {
      title: "Quix",
      description: `Description Description Description Description Description
            Description Description Description Description Description
            Description Description Description Description Description
            Description Description Description Description Description`,
    },
    {
      title: "Cibar",
      description: `Description Description Description Description Description
            Description Description Description Description Description
            Description Description Description Description Description
            Description Description Description Description Description`,
    },
  ];

  const showPopup = (title: string) => {
    const project = projects.find((project) => project.title == title);
    const description = project?.description || "";

    const popup = document.querySelector(".popup");
    popup?.classList.remove("hidden");

    const popupTitle = document.querySelector(".popup-title");
    const popupDescription = document.querySelector(".popup-description");

    if (popupTitle && popupDescription) {
      popupTitle.textContent = title;
      popupDescription.textContent = description;
    }
  };

  const hidePopup = () => {
    const popup = document.querySelector(".popup");
    popup?.classList.add("hidden");
  };

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (!secondProjectRef.current || !thirdProjectRef.current) return;

      const projectTitle = document.querySelector(".project_title");
      const firstProject = document.querySelector(".first_project");
      const secondProject = secondProjectRef.current;
      const thirdProject = thirdProjectRef.current;

      if (!projectTitle || !firstProject || !secondProject || !thirdProject)
        return;

      const rem = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );

      const titleRect = projectTitle.getBoundingClientRect();
      const thirdProjectRect = thirdProject.getBoundingClientRect();

      if (e.deltaY > 0 && titleRect.top <= rem * 10) {
        e.preventDefault();
      }

      if (e.deltaY < 0 && thirdProjectRect.bottom <= 0) {
        e.preventDefault();
      }

      const titleTop = projectTitle.getBoundingClientRect().top;
      const potentialTitleTop = titleTop - e.deltaY;

      const secondProjectTop = secondProject.getBoundingClientRect().top;
      const potentialSecondTop = secondProjectTop - e.deltaY - rem * 3.5;

      const thirdProjectTop = thirdProject.getBoundingClientRect().top;
      const potentialThirdTop = thirdProjectTop - e.deltaY;
      const thirdProjectBottom = thirdProject.getBoundingClientRect().bottom;

      if (
        e.deltaY > 0 &&
        titleTop <= rem * 10 &&
        thirdProjectBottom >= window.innerHeight - 5 * rem
      ) {
        if (
          potentialTitleTop <= rem * 10 &&
          potentialSecondTop >= potentialTitleTop
        ) {
          e.preventDefault();

          const currentMarginRem = parseFloat(
            secondProject.style.marginTop || "0"
          );
          const rootFontSize = parseFloat(
            getComputedStyle(document.documentElement).fontSize
          );

          secondProject.style.marginTop = `${
            currentMarginRem - e.deltaY / rootFontSize
          }rem`;
        } else if (
          potentialThirdTop >= secondProjectTop &&
          secondProject.style.marginTop
        ) {
          e.preventDefault();

          const currentMarginRem = parseFloat(
            thirdProject.style.marginTop || "0"
          );
          const rootFontSize = parseFloat(
            getComputedStyle(document.documentElement).fontSize
          );

          thirdProject.style.marginTop = `${
            currentMarginRem - e.deltaY / rootFontSize
          }rem`;
        }
      } else if (
        e.deltaY < 0 &&
        titleTop <= rem * 10 &&
        thirdProjectBottom >= window.innerHeight - 5 * rem
      ) {
        const thirdMargin = parseFloat(thirdProject.style.marginTop || "0");
        const secondMargin = parseFloat(secondProject.style.marginTop || "0");

        if (thirdMargin < 0) {
          console.log(parseFloat(thirdProject.style.marginTop));
          e.preventDefault();
          const currentMarginRem = parseFloat(thirdProject.style.marginTop);
          const rootFontSize = parseFloat(
            getComputedStyle(document.documentElement).fontSize
          );
          const newMargin = currentMarginRem - e.deltaY / rootFontSize;
          thirdProject.style.marginTop = `${newMargin}rem`;
        } else if (secondMargin < 0) {
          e.preventDefault();
          const currentMarginRem = parseFloat(secondProject.style.marginTop);
          const rootFontSize = parseFloat(
            getComputedStyle(document.documentElement).fontSize
          );
          const newMargin = currentMarginRem - e.deltaY / rootFontSize;
          secondProject.style.marginTop = `${newMargin}rem`;
        }
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <section id="projects" className="mt-28">
      <div className="project_title relative z-30 w-full text-center">
        <h1 className="font-semibold text-5xl">Projects</h1>
      </div>
      <div className="first_project relative flex flex-col h-[calc(100svh-5rem)] mb-28">
        <div className="flex flex-col flex-grow justify-center w-full px-6 sm:px-12 lg:px-24 gap-x-5">
          <div
            className={`flex flex-col w-3/4 sm:w-1/2 lg:w-1/3 ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-200"
            } border-2 ${
              theme === "dark" ? "border-gray-700" : "border-gray-300"
            } rounded-lg`}
          >
            <p className="text-[1.65rem] font-bold pt-5 pl-5">DevX</p>
            <p
              className={`px-5 pt-2 pb-5 text-transparent bg-clip-text bg-gradient-to-b ${
                theme === "dark"
                  ? "from-gray-200 to-transparent"
                  : "from-gray-800 to-transparent"
              }`}
            >
              Description Description Description Description Description
              Description Description Description Description Description
              Description Description Description Description Description
              Description Description Description Description Description
              Description Description Description Description Description
              Description Description Description Description Description
              Description Description Description Description Description
            </p>
            <p
              className="px-5 pb-5 text-[#0077b6] text-sm hover:cursor-pointer"
              onClick={() => {
                showPopup("DevX");
              }}
            >
              Show More
            </p>
          </div>
        </div>
      </div>
      <div
        ref={secondProjectRef}
        className="second_project z-10 relative flex flex-col h-[calc(100svh-5rem)] mb-28"
        style={{
          background: theme === "dark" ? darkGradient : lightGradient,
        }}
      >
        <div className="flex flex-col flex-grow justify-center items-end w-full px-6 sm:px-12 lg:px-24 gap-x-5">
          <div
            className={`flex flex-col w-3/4 sm:w-1/2 lg:w-1/3 ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-200"
            } border-2 ${
              theme === "dark" ? "border-gray-700" : "border-gray-300"
            } rounded-lg`}
          >
            <p className="text-[1.65rem] font-bold pt-5 pl-5">Quix</p>
            <p
              className={`px-5 pt-2 pb-5 text-transparent bg-clip-text bg-gradient-to-b ${
                theme === "dark"
                  ? "from-gray-200 to-transparent"
                  : "from-gray-800 to-transparent"
              }`}
            >
              Description Description Description Description Description
              Description Description Description Description Description
              Description Description Description Description Description
              Description Description Description Description Description
              Description Description Description Description Description
              Description Description Description Description Description
              Description Description Description Description Description
            </p>
            <p
              className="px-5 pb-5 text-[#0077b6] text-sm hover:cursor-pointer"
              onClick={() => {
                showPopup("Quix");
              }}
            >
              Show More
            </p>
          </div>
        </div>
      </div>
      <div
        ref={thirdProjectRef}
        className="third_project z-20 relative flex flex-col h-[calc(100svh-5rem)]"
        style={{
          background: theme === "dark" ? darkGradient : lightGradient,
        }}
      >
        <div className="flex flex-col flex-grow justify-center w-full px-6 sm:px-12 lg:px-24 gap-x-5">
          <div
            className={`flex flex-col w-3/4 sm:w-1/2 lg:w-1/3 ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-200"
            } border-2 ${
              theme === "dark" ? "border-gray-700" : "border-gray-300"
            } rounded-lg`}
          >
            <p className="text-[1.65rem] font-bold pt-5 pl-5">Cibar</p>
            <p
              className={`px-5 pt-2 pb-5 text-transparent bg-clip-text bg-gradient-to-b ${
                theme === "dark"
                  ? "from-gray-200 to-transparent"
                  : "from-gray-800 to-transparent"
              }
              `}
            >
              Description Description Description Description Description
              Description Description Description Description Description
              Description Description Description Description Description
              Description Description Description Description Description
              Description Description Description Description Description
              Description Description Description Description Description
              Description Description Description Description Description
            </p>
            <p
              className="px-5 pb-5 text-[#0077b6] text-sm hover:cursor-pointer"
              onClick={() => {
                showPopup("Cibar");
              }}
            >
              Show More
            </p>
          </div>
        </div>
        <div className="fixed hidden popup z-40 w-screen h-screen top-[calc(15%+2.5rem)] left-[20%]">
          <div className="w-[60%] h-[70%] bg-gray-800 border-2 border-gray-700 p-5 rounded-lg">
            <h1 className="popup-title text-[2.175rem] font-bold">Title</h1>
            <p className="popup-description mt-3">Description</p>
            <div className="flex w-full justify-end">
              <button className="absolute top-[1.25rem]" onClick={hidePopup}>
                <MdClose className="text-red-600 hover:text-red-700 text-[2.2rem] transition-colors duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
