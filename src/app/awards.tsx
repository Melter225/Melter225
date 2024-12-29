import Image from "next/image";

export default function Awards() {
  const awards = [
    { src: "/test1", alt: "test1" },
    { src: "/test2", alt: "test2" },
    { src: "/test3", alt: "test3" },
    { src: "/test4", alt: "test4" },
    { src: "/test5", alt: "test5" },
    { src: "/test6", alt: "test6" },
    { src: "/test7", alt: "test7" },
    { src: "/test8", alt: "test8" },
    { src: "/test9", alt: "test9" },
    { src: "/test10", alt: "test10" },
  ];

  return (
    <div className="flex w-[200rem] h-[6rem] bg-gray-800 py-20 items-center justify-center gap-x-5 mb-28">
      {awards.map(({ src, alt }, index) => (
        <div
          key={`${index}`}
          className="flex justify-center items-center w-[20rem] h-[6rem]"
        >
          <Image src={src} alt={alt} width={30} height={20} />
        </div>
      ))}
    </div>
  );
}
