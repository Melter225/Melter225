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
      description:
        "DevX is a revolutionary browser designed for developers, merging the functionalities of a cutting-edge IDE, an advanced desktop IDE companion, and AI integration. With its intuitive interface, developers can code, debug, and collaborate directly in the browser, eliminating the need to switch between tools. The browser includes real-time syntax highlighting, language support, and streamlined project management, all optimized for maximum productivity. The desktop IDE companion enhances this experience with powerful debugging tools, seamless integration with version control systems, and advanced features for managing complex projects. DevX's AI assistant redefines coding by offering contextual suggestions, auto-generating boilerplate code, resolving bugs, and optimizing performance. It adapts to the user's habits, providing personalized insights and learning from ongoing projects. Beyond individual development, DevX connects users through a Stack Overflow-style forum, where developers can share expertise, troubleshoot, and grow as a community. From simplifying solo projects to streamlining team workflows, DevX provides everything modern developers need to excel in their craft.",
    },
    {
      title: "Quix",
      description:
        "Quix is an AI-powered learning app that offers a personalized educational experience, adapting to the needs and interests of each user. Whether exploring a broad topic like world history or diving into specifics such as the mechanics of quantum physics, Quix tailors its lessons to fit the learner's goals. The app supports a wide range of formats, including detailed reading materials, curated videos, interactive quizzes, and web-based exploration. Its AI-driven engine dynamically adjusts the content based on user feedback, progress, and comprehension, ensuring an effective learning process. Quix also offers simulations and virtual tutors, allowing users to practice concepts interactively. Whether preparing for exams, pursuing hobbies, or advancing professional skills, the app transforms learning into an engaging and efficient journey. With its user-friendly interface and versatile features, Quix makes mastering any subject accessible to all.",
    },
    {
      title: "Cibar",
      description:
        "Cibar is a Chrome extension dedicated to combating cyberbullying and harmful online content. Running quietly in the background, it uses advanced AI to monitor the user's screen for text and images that suggest cyberbullying, harassment, or inappropriate material. When Cibar detects potential issues, it evaluates the severity and provides actionable guidance to address the situation. Users receive tailored advice, educational resources, and, if needed, contact information for relevant support organizations. Cibar ensures its guidance is age-appropriate, offering simplified steps for younger users and comprehensive strategies for adults. By promoting awareness and constructive responses, Cibar fosters safer digital interactions and empowers users to navigate the online world responsibly.",
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
              DevX is a revolutionary browser designed for developers, merging
              the functionalities of a cutting-edge IDE, an advanced desktop IDE
              companion, and AI integration. With its intuitive interface,
              developers can code, debug, and collaborate directly in the
              browser, eliminating the need to switch between tools.
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
              Quix is an AI-powered learning app that offers a personalized
              educational experience, adapting to the needs and interests of
              each user. Whether exploring a broad topic like world history or
              diving into specifics such as the mechanics of quantum physics,
              Quix tailors its lessons to fit the learner&apos;s goals.
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
              Cibar is a Chrome extension dedicated to combating cyberbullying
              and harmful online content. Running quietly in the background, it
              uses advanced AI to monitor the user&apos;s screen for text and
              images that suggest cyberbullying, harassment, or inappropriate
              material.
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
