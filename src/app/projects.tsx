"use client";

// import Image from "next/image";
import { MdClose } from "react-icons/md";
import { useTheme } from "../../contexts/themeContext.tsx";
import BackgroundGrid from "./backgroundGrid.tsx";

export default function Projects() {
  const { theme } = useTheme();

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

  return (
    <section id="projects" className="mt-36">
      <div
        className="first_project sticky top-36 flex flex-col h-[calc(100svh-5rem)] mb-28"
        style={{
          background: theme === "dark" ? darkGradient : lightGradient,
        }}
      >
        <BackgroundGrid
          id="fadeGradient"
          startOffset={0}
          midStartOffset={35}
          midEndOffset={65}
          endOffset={100}
        />
        <div className="top-24 w-full text-center">
          <h1 className="font-semibold text-5xl">Projects</h1>
        </div>
        <div className="z-[5] flex flex-col flex-grow justify-center w-full px-6 sm:px-12 lg:px-24 gap-x-5">
          <svg
            className="hidden lg:flex absolute top-0 left-0 h-dvh"
            width="400"
            height="400"
            viewBox="0 0 879 1077"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.2" filter="url(#filter0_f_130_898)">
              <ellipse
                cx="439.5"
                cy="470.5"
                rx="238.5"
                ry="139.5"
                transform="rotate(90 439.5 470.5)"
                fill="#5000B5"
              ></ellipse>
            </g>
            <defs>
              <filter
                id="filter0_f_130_898"
                x="0"
                y="-68"
                width="879"
                height="1077"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="150"
                  result="effect1_foregroundBlur_130_898"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
          <div
            className={`flex flex-col w-3/4 sm:w-1/2 lg:w-1/3 ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-200"
            } border-2 ${
              theme === "dark" ? "border-gray-700" : "border-gray-300"
            } rounded-xl`}
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
              className="z-10 px-5 pb-5 text-[#0077b6] text-sm hover:cursor-pointer"
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
        className="second_project z-10 sticky top-36 flex flex-col h-[calc(100svh-5rem)] mb-28"
        style={{
          background: theme === "dark" ? darkGradient : lightGradient,
        }}
      >
        <BackgroundGrid
          id="fadeGradient"
          startOffset={0}
          midStartOffset={35}
          midEndOffset={65}
          endOffset={100}
        />
        <div className="z-[5] flex flex-col flex-grow justify-center items-end w-full px-6 sm:px-12 lg:px-24 gap-x-5">
          <svg
            className="hidden lg:flex absolute top-0 right-0 h-dvh"
            width="400"
            height="400"
            viewBox="0 0 879 1077"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.2" filter="url(#filter0_f_130_898)">
              <ellipse
                cx="439.5"
                cy="470.5"
                rx="238.5"
                ry="139.5"
                transform="rotate(90 439.5 470.5)"
                fill="#5000B5"
              ></ellipse>
            </g>
            <defs>
              <filter
                id="filter0_f_130_898"
                x="0"
                y="-68"
                width="879"
                height="1077"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="150"
                  result="effect1_foregroundBlur_130_898"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
          <div
            className={`flex flex-col w-3/4 sm:w-1/2 lg:w-1/3 ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-200"
            } border-2 ${
              theme === "dark" ? "border-gray-700" : "border-gray-300"
            } rounded-xl`}
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
              className="z-10 px-5 pb-5 text-[#0077b6] text-sm hover:cursor-pointer"
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
        className="third_project z-20 relative top-[-7rem] flex flex-col h-[calc(100svh-5rem)] mb-28"
        style={{
          background: theme === "dark" ? darkGradient : lightGradient,
        }}
      >
        <BackgroundGrid
          id="fadeGradient"
          startOffset={0}
          midStartOffset={35}
          midEndOffset={65}
          endOffset={100}
        />
        <div className="z-[5] flex flex-col flex-grow justify-center w-full px-6 sm:px-12 lg:px-24 gap-x-5">
          <svg
            className="hidden lg:flex absolute top-0 left-0 h-dvh"
            width="400"
            height="400"
            viewBox="0 0 879 1077"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.2" filter="url(#filter0_f_130_898)">
              <ellipse
                cx="439.5"
                cy="470.5"
                rx="238.5"
                ry="139.5"
                transform="rotate(90 439.5 470.5)"
                fill="#5000B5"
              ></ellipse>
            </g>
            <defs>
              <filter
                id="filter0_f_130_898"
                x="0"
                y="-68"
                width="879"
                height="1077"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="150"
                  result="effect1_foregroundBlur_130_898"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
          <div
            className={`flex flex-col w-3/4 sm:w-1/2 lg:w-1/3 ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-200"
            } border-2 ${
              theme === "dark" ? "border-gray-700" : "border-gray-300"
            } rounded-xl`}
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
              className="z-10 px-5 pb-5 text-[#0077b6] text-sm hover:cursor-pointer"
              onClick={() => {
                showPopup("Cibar");
              }}
            >
              Show More
            </p>
          </div>
        </div>
      </div>
      <div className="fixed hidden popup z-40 w-screen h-screen top-[calc(15%+2.5rem)] left-[20%]">
        <div className="w-[60%] h-[70%] bg-gray-800 border-2 border-gray-700 rounded-lg">
          <div className="w-full h-[6.5rem] bg-gradient-to-b from-gray-700 to-gray-800 via-[#2F3947] p-5">
            <h1 className="popup-title text-[2.175rem] font-bold">Title</h1>
          </div>
          <div className="w-full h-[calc(100%-5rem)] p-5">
            <p className="popup-description">Description</p>
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
