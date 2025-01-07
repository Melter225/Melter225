"use client";

import Image from "next/image";
import { useTheme } from "../../contexts/themeContext.tsx";

export default function Testimonials() {
  const { theme } = useTheme();
  const testimonials = [
    {
      src: "/ProfilePicture_Example.jpg",
      alt: "Example Profile Picture",
      name: "test1",
      username: "@test1",
      testimonial:
        "Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial",
    },
    {
      src: "/ProfilePicture_Example.jpg",
      alt: "Example Profile Picture",
      name: "test2",
      username: "@test2",
      testimonial:
        "Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial",
    },
    {
      src: "/ProfilePicture_Example.jpg",
      alt: "Example Profile Picture",
      name: "test3",
      username: "@test3",
      testimonial:
        "Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial",
    },
    {
      src: "/ProfilePicture_Example.jpg",
      alt: "Example Profile Picture",
      name: "test4",
      username: "@test4",
      testimonial:
        "Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial",
    },
    {
      src: "/ProfilePicture_Example.jpg",
      alt: "Example Profile Picture",
      name: "test5",
      username: "@test5",
      testimonial:
        "Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial",
    },
    {
      src: "/ProfilePicture_Example.jpg",
      alt: "Example Profile Picture",
      name: "test6",
      username: "@test6",
      testimonial:
        "Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial",
    },
    {
      src: "/ProfilePicture_Example.jpg",
      alt: "Example Profile Picture",
      name: "test7",
      username: "@test7",
      testimonial:
        "Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial",
    },
    {
      src: "/ProfilePicture_Example.jpg",
      alt: "Example Profile Picture",
      name: "test8",
      username: "@test8",
      testimonial:
        "Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial",
    },
    {
      src: "/ProfilePicture_Example.jpg",
      alt: "Example Profile Picture",
      name: "test9",
      username: "@test9",
      testimonial:
        "Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial",
    },
    {
      src: "/ProfilePicture_Example.jpg",
      alt: "Example Profile Picture",
      name: "test10",
      username: "@test10",
      testimonial:
        "Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial Testimonial",
    },
  ];

  return (
    <section id="testimonials" className="mt-28">
      <div className="flex flex-col w-full items-center justify-center text-center">
        <p
          className={`font-semibold ${
            theme === "dark" ? "text-indigo-600" : "text-indigo-400"
          } text-lg`}
        >
          Testimonials
        </p>
        <h1 className="font-semibold text-4xl lg:text-5xl text-balance">
          We have worked with thousands of amazing people
        </h1>
      </div>
      {/* <div className="w-full text-center">
        <h1 className="font-semibold text-5xl">Testimonials</h1>
      </div> */}
      <div className="inline-flex flex-nowrap w-full overflow-x-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mt-8">
        <div className="row-fin flex w-[400rem] h-[22rem] items-center justify-center animate-infinite-scroll-testimonials pause hover:cursor-pointer gap-x-5 my-10">
          {testimonials.map(
            ({ src, alt, name, username, testimonial }, index) => (
              <div
                key={`${index}`}
                className={`flex flex-col justify-center w-[22rem] h-[22rem] ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-200"
                } rounded-xl shadow-lg ${
                  theme === "dark" ? "shadow-gray-900" : "shadow-gray-300"
                } border-2 ${
                  theme === "dark" ? "border-neutral-800" : "border-neutral-400"
                }`}
              >
                <div
                  className={`flex flex-grow self-start items-center w-full h-[8rem] rounded-t-lg bg-cover bg-center bg-no-repeat`}
                  style={{
                    backgroundImage: 'url("/TestimonialsBackground.png")',
                  }}
                >
                  <div className="flex w-full items-center ml-3">
                    <div className="justify-self-start ml-4">
                      <Image
                        className={`${
                          theme === "dark" ? "invert-0" : "invert"
                        } rounded-full`}
                        src={src}
                        alt={alt}
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="justify-self-end ml-4">
                      <p className="font-medium">{name}</p>
                      <p className="font-medium text-sm italic">{username}</p>
                    </div>
                  </div>
                </div>
                <div
                  className={`flex flex-grow self-end items-center justify-center w-full h-[14rem] ${
                    theme === "dark" ? "bg-gray-900" : "bg-gray-200"
                  } px-4 rounded-b-lg`}
                >
                  <p>{testimonial}</p>
                </div>
              </div>
            )
          )}
          {testimonials.map(
            ({ src, alt, name, username, testimonial }, index) => (
              <div
                key={`${index}`}
                className={`flex flex-col justify-center w-[22rem] h-[22rem] ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-200"
                } rounded-xl shadow-lg ${
                  theme === "dark" ? "shadow-gray-900" : "shadow-gray-300"
                } border-2 ${
                  theme === "dark" ? "border-neutral-800" : "border-neutral-400"
                }`}
              >
                <div
                  className={`flex flex-grow self-start items-center w-full h-[8rem] rounded-t-lg bg-cover bg-center bg-no-repeat`}
                  style={{
                    backgroundImage: 'url("/TestimonialsBackground.png")',
                  }}
                >
                  <div className="flex w-full items-center ml-3">
                    <div className="justify-self-start ml-4">
                      <Image
                        className={`${
                          theme === "dark" ? "invert-0" : "invert"
                        } rounded-full`}
                        src={src}
                        alt={alt}
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="justify-self-end ml-4">
                      <p className="font-medium">{name}</p>
                      <p className="font-medium text-sm italic">{username}</p>
                    </div>
                  </div>
                </div>
                <div
                  className={`flex flex-grow self-end items-center justify-center w-full h-[14rem] ${
                    theme === "dark" ? "bg-gray-900" : "bg-gray-200"
                  } px-4 rounded-b-lg`}
                >
                  <p>{testimonial}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
