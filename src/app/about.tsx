import Image from "next/image";

export default function About() {
  const languages = [
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
    <div className="mb-24">
      <div className="w-full text-center">
        <h1 className="font-semibold text-5xl">About Me</h1>
      </div>
      <div className="flex flex-row w-full gap-x-5 px-24 mt-10">
        <div className="flex flex-col w-1/2 justify-center bg-gray-800 border-2 border-gray-700 rounded-lg">
          <p className="pl-5 pt-5 text-2xl font-semibold">Projects Created</p>
          <p className="pl-5 py-5 text-4xl font-semibold">10</p>
        </div>
        <div className="flex flex-col w-1/2 bg-gray-800 border-2 border-gray-700 rounded-lg">
          <p className="pl-5 pt-5 text-2xl font-semibold">
            Years of Experience
          </p>
          <p className="pl-5 py-5 text-4xl font-semibold">4</p>
          <div className="grid">
            <p className="absolute self-end justify-self-end text-lg pr-5 pb-5">
              Since 2020
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full px-24 mt-5">
        <div className="flex flex-col text-center w-full bg-gray-800 border-2 border-gray-700 rounded-lg">
          <p className="pl-5 pt-5 text-2xl font-semibold">Languages & Tools</p>
          <div className="grid grid-flow-col grid-col-3 grid-rows-4 gap-x-10 gap-y-3 pl-5 py-5 mt-5">
            {languages.map(({ src, alt }, index) => (
              <div className="flex flex-col items-center" key={`${index}`}>
                <Image src={src} alt={alt} width={30} height={30} />
                <p>{alt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
