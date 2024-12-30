import Image from "next/image";

export default function Awards() {
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

  return (
    <div className="inline-flex flex-nowrap w-full overflow-x-hidden">
      <div className="row-fin flex w-[400rem] h-[6rem] bg-gray-800 py-20 items-center justify-center animate-infinite-scroll-awards pause hover:cursor-pointer gap-x-5 mb-28">
        {awards.map(({ src, alt }, index) => (
          <div
            key={`${index}`}
            className="flex justify-center items-center w-[20rem] h-[6rem]"
          >
            <Image src={src} alt={alt} width={30} height={20} />
          </div>
        ))}
        {awards.map(({ src, alt }, index) => (
          <div
            key={`${index}`}
            className="flex justify-center items-center w-[20rem] h-[6rem]"
          >
            <Image src={src} alt={alt} width={30} height={20} />
          </div>
        ))}
      </div>
    </div>
  );
}
