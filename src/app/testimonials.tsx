import Image from "next/image";

export default function Testimonials() {
  //testimonial scrolling resets and is not continuous
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
    <div>
      <div className="w-full text-center">
        <h1 className="font-semibold text-5xl">Testimonials</h1>
      </div>
      <div className="inline-flex flex-nowrap w-full overflow-x-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="row-fin flex w-[400rem] h-[22rem] items-center justify-center animate-infinite-scroll-testimonials pause hover:cursor-pointer gap-x-5 my-10">
          {testimonials.map(
            ({ src, alt, name, username, testimonial }, index) => (
              <div
                key={`${index}`}
                className="flex flex-col justify-center w-[22rem] h-[22rem] bg-neutral-800 rounded-lg shadow-lg shadow-gray-900 border-2 border-neutral-800"
              >
                <div className="flex flex-grow self-start items-center w-full h-[8rem] bg-gray-800 rounded-t-xl">
                  <div className="flex w-full items-center ml-3">
                    <div className="justify-self-start ml-4">
                      <Image
                        className="rounded-full"
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
                <div className="flex flex-grow self-end items-center justify-center w-full h-[14rem] bg-gray-900 px-4 rounded-b-xl">
                  <p>{testimonial}</p>
                </div>
              </div>
            )
          )}
          {testimonials.map(
            ({ src, alt, name, username, testimonial }, index) => (
              <div
                key={`${index}`}
                className="flex flex-col justify-center w-[22rem] h-[22rem] bg-neutral-800 rounded-lg shadow-lg shadow-gray-900 border-2 border-neutral-800"
              >
                <div className="flex flex-grow self-start items-center w-full h-[8rem] bg-gray-800 rounded-t-xl">
                  <div className="flex w-full items-center ml-3">
                    <div className="justify-self-start ml-4">
                      <Image
                        className="rounded-full"
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
                <div className="flex flex-grow self-end items-center justify-center w-full h-[14rem] bg-gray-900 px-4 rounded-b-xl">
                  <p>{testimonial}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
