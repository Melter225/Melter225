import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      src: "/test1",
      alt: "test1",
      name: "test1",
      username: "test1",
      testimonial: "test1",
    },
    {
      src: "/test2",
      alt: "test2",
      name: "test2",
      username: "test2",
      testimonial: "test2",
    },
    {
      src: "/test3",
      alt: "test3",
      name: "test3",
      username: "test3",
      testimonial: "test3",
    },
    {
      src: "/test4",
      alt: "test4",
      name: "test4",
      username: "test4",
      testimonial: "test4",
    },
    {
      src: "/test5",
      alt: "test5",
      name: "test5",
      username: "test5",
      testimonial: "test5",
    },
    {
      src: "/test6",
      alt: "test6",
      name: "test6",
      username: "test6",
      testimonial: "test6",
    },
    {
      src: "/test7",
      alt: "test7",
      name: "test7",
      username: "test7",
      testimonial: "test7",
    },
    {
      src: "/test8",
      alt: "test8",
      name: "test8",
      username: "test8",
      testimonial: "test8",
    },
    {
      src: "/test9",
      alt: "test9",
      name: "test9",
      username: "test9",
      testimonial: "test9",
    },
    {
      src: "/test10",
      alt: "test10",
      name: "test10",
      username: "test10",
      testimonial: "test10",
    },
  ];

  return (
    <div>
      <div className="w-full text-center">
        <h1 className="font-semibold text-5xl">Testimonials</h1>
      </div>
      <div className="flex w-[200rem] h-[12rem] items-center justify-center gap-x-5 my-10">
        {testimonials.map(
          ({ src, alt, name, username, testimonial }, index) => (
            <div
              key={`${index}`}
              className="flex flex-col justify-center w-[22rem] h-[12rem] bg-neutral-800 rounded-lg shadow-lg shadow-gray-900 border-2 border-neutral-800"
            >
              <div className="flex flex-grow self-start items-center w-full h-[8rem] bg-gray-800 rounded-t-xl">
                <div className="flex w-full items-center ml-6">
                  <div className="justify-self-start ml-4">
                    <Image src={src} alt={alt} width={20} height={20} />
                  </div>
                  <div className="justify-self-end ml-4">
                    <p className="font-medium">{name}</p>
                    <p className="font-medium text-sm italic">{username}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-grow self-end items-center justify-center w-full h-[4rem] bg-gray-900 rounded-b-xl">
                <p>{testimonial}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
