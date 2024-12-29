import Image from "next/image";

export default function About() {
  const languages = [
    { src: "/LogoIcon.png", alt: "Logo", width: 40, height: 40 },
    { src: "/PygameIcon.png", alt: "Pygame", width: 120, height: 120 },
    { src: "/PythonIcon.png", alt: "Python", width: 30, height: 30 },
    { src: "/HTMLIcon.png", alt: "HTML", width: 30, height: 30 },
    { src: "/CSSIcon.png", alt: "CSS", width: 30, height: 30 },
    { src: "/JavaScriptIcon.png", alt: "JavaScript", width: 30, height: 30 },
    { src: "/NodeJSIcon.png", alt: "NodeJS", width: 33, height: 33 },
    { src: "/ReactIcon.png", alt: "React", width: 30, height: 30 },
    { src: "/RaspberryPiIcon.png", alt: "Raspberry Pi", width: 40, height: 40 },
    { src: "/LuaIcon.png", alt: "Lua", width: 30, height: 30 },
    { src: "/PostgreSQLIcon.png", alt: "PostgreSQL", width: 32, height: 32 },
    { src: "/SQLiteIcon.png", alt: "SQLite", width: 85, height: 85 },
    { src: "/GitHubIcon.png", alt: "GitHub", width: 30, height: 30 },
    { src: "/KotlinIcon.png", alt: "Kotlin", width: 30, height: 30 },
    { src: "/UnityIcon.png", alt: "Unity", width: 50, height: 50 },
    { src: "/FigmaIcon.png", alt: "Figma", width: 40, height: 40 },
    { src: "/NextJSIcon.png", alt: "NextJS", width: 30, height: 30 },
    { src: "/TypeScriptIcon.png", alt: "TypeScript", width: 30, height: 30 },
    { src: "/TailwindCSSIcon.png", alt: "Tailwind CSS", width: 30, height: 30 },
    { src: "/PrismaIcon.png", alt: "Prisma", width: 30, height: 30 },
    { src: "/TinkercadIcon.png", alt: "Tinkercad", width: 32, height: 32 },
    { src: "/CSharpIcon.png", alt: "C#", width: 30, height: 30 },
    { src: "/RustIcon.png", alt: "Rust", width: 30, height: 30 },
    { src: "/ReactIcon.png", alt: "React Native", width: 30, height: 30 },
  ];

  return (
    <div className="mb-28">
      <div className="w-full text-center">
        <h1 className="font-semibold text-5xl">About Me</h1>
      </div>
      <div className="flex w-full px-24 mt-10">
        <div className="flex flex-col w-full bg-gray-800 border-2 border-gray-700 rounded-lg">
          <p className="pl-5 pt-5 text-2xl font-semibold">About</p>
          <p className="p-5">
            I&apos;m Rohan Mahapatra, a passionate coder with a love for
            creating and problem-solving. My journey into the world of
            technology began early, thanks to the guidance of my grandfather,
            who introduced me to programming with Python and Turtle. Fueled by
            curiosity, I dove into web development, exploring HTML, CSS, and
            JavaScript, which laid the foundation for my ever-growing skills in
            the tech space.
            <br></br>
            <br></br>
            Over the years, I&apos;ve expanded my expertise across various
            programming languages and frameworks. I learned the basics of React
            and mastered Node.js, using it to build servers and multiplayer
            platforms. From there, I advanced to Next.js, TypeScript, and
            Tailwind CSS, continually seeking opportunities to grow.
            <br></br>
            <br></br>
            My coding journey has included diverse projects, from developing
            tools for nonprofits to creating AI-powered educational apps and
            extensions designed to tackle cyberbullying. As of now, I&apos;m
            developing a Rust-based browser targeted for developers,
            incorporating features like a buit-in IDE and integrated AI.
            <br></br>
            <br></br>
            I&apos;ve also ventured into robotics, experimenting with hardware
            such as the Raspberry Pi, where I explored features including the
            Sense HAT, camera integration, and breadboard circuits.
            Additionally, I&apos;ve designed and built more hardware-oriented
            robots with features like sonar detection and line-following
            capabilities. I even delved into game development, creating
            functional 3D games through Unity as well as smaller platformers
            using Lua, which taught me the value of blending creativity with
            technical know-how. Most recently, I&apos;ve been focusing on
            competitive programming, honing my skills with languages such as
            Python and C# in preparation for USACO.
            <br></br>
            <br></br>
            Beyond technology, I enjoy a range of hobbies that keep me balanced.
            I write for fun, fence to stay active, and play the tabla to connect
            with my cultural roots.
          </p>
        </div>
      </div>
      <div className="flex flex-row w-full gap-x-5 px-24 mt-5">
        <div className="flex flex-col w-1/2 justify-center bg-gray-800 border-2 border-gray-700 rounded-lg">
          <p className="pl-5 pt-5 text-2xl font-semibold">Projects Created</p>
          <p className="pl-5 py-5 text-4xl font-semibold">111</p>
        </div>
        <div className="flex flex-col w-1/2 bg-gray-800 border-2 border-gray-700 rounded-lg">
          <p className="pl-5 pt-5 text-2xl font-semibold">
            Years of Experience
          </p>
          <p className="pl-5 py-5 text-4xl font-semibold">6</p>
          <div className="grid">
            <p className="absolute self-end justify-self-end text-lg pr-5 pb-5">
              Since 2018
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full px-24 mt-5">
        <div className="flex flex-col text-center w-full bg-gray-800 border-2 border-gray-700 rounded-lg">
          <p className="pl-5 pt-5 text-2xl font-semibold">Languages & Tools</p>
          <div className="grid grid-cols-6 gap-x-10 gap-y-3 p-5 mt-5">
            {languages.map(({ src, alt, width, height }, index) => (
              <div className="flex flex-col items-center" key={`${index}`}>
                <Image
                  className="invert"
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                />
                <p>{alt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
