"use client";

interface Attribution {
  iconName: string;
  creator: string;
  link: string;
}

export default function Attributions() {
  const iconAttributions: Attribution[] = [
    {
      iconName: "Coding icons",
      creator: "Freepik",
      link: "https://www.flaticon.com/free-icons/coding",
    },
    {
      iconName: "Code icons",
      creator: "Royyan Wijaya",
      link: "https://www.flaticon.com/free-icons/code",
    },
    {
      iconName: "Coffee icons",
      creator: "Freepik",
      link: "https://www.flaticon.com/free-icons/coffee",
    },
    {
      iconName: "Computer icons",
      creator: "Freepik",
      link: "https://www.flaticon.com/free-icons/computer",
    },
    {
      iconName: "C++ icons",
      creator: "meaicon",
      link: "https://www.flaticon.com/free-icons/c-",
    },
    {
      iconName: "CSS icons",
      creator: "Pixel perfect",
      link: "https://www.flaticon.com/free-icons/css",
    },
    {
      iconName: "Database icons",
      creator: "Freepik",
      link: "https://www.flaticon.com/free-icons/database",
    },
    {
      iconName: "Discord icons",
      creator: "Freepik",
      link: "https://www.flaticon.com/free-icons/discord",
    },
    {
      iconName: "Email icons",
      creator: "Freepik",
      link: "https://www.flaticon.com/free-icons/email",
    },
    {
      iconName: "Figma icons",
      creator: "Iconir",
      link: "https://www.flaticon.com/free-icons/figma",
    },
    {
      iconName: "Settings icons",
      creator: "Freepik",
      link: "https://www.flaticon.com/free-icons/settings",
    },
    {
      iconName: "Github icons",
      creator: "Pixel perfect",
      link: "https://www.flaticon.com/free-icons/github",
    },
    {
      iconName: "Computer icons",
      creator: "Freepik",
      link: "https://www.flaticon.com/free-icons/computer",
    },
    {
      iconName: "HTML icons",
      creator: "Freepik",
      link: "https://www.flaticon.com/free-icons/html",
    },
    {
      iconName: "Javascript icons",
      creator: "edt.im",
      link: "https://www.flaticon.com/free-icons/javascript",
    },
    {
      iconName: "Keyboard icons",
      creator: "Chanut-is-Industries",
      link: "https://www.flaticon.com/free-icons/keyboard",
    },
    {
      iconName: "Idea icons",
      creator: "Good Ware",
      link: "https://www.flaticon.com/free-icons/idea",
    },
    {
      iconName: "Turtle icons",
      creator: "iconixar",
      link: "https://www.flaticon.com/free-icons/turtle",
    },
    {
      iconName: "NodeJS icons",
      creator: "Grand Iconic",
      link: "https://www.flaticon.com/free-icons/nodejs",
    },
    {
      iconName: "Paintbrush icons",
      creator: "Freepik",
      link: "https://www.flaticon.com/free-icons/paintbrush",
    },
    {
      iconName: "PostgreSQL icons",
      creator: "Freepik",
      link: "https://www.flaticon.com/free-icons/postgre",
    },
    {
      iconName: "Puzzle piece icons",
      creator: "kerismaker",
      link: "https://www.flaticon.com/free-icons/puzzle-piece",
    },
    {
      iconName: "Python icons",
      creator: "Freepik",
      link: "https://www.flaticon.com/free-icons/python",
    },
    {
      iconName: "Raspberry Pi icons",
      creator: "Freepik",
      link: "https://www.flaticon.com/free-icons/raspberry-pi",
    },
    {
      iconName: "React icons",
      creator: "Freepik",
      link: "https://www.flaticon.com/free-icons/react",
    },
    {
      iconName: "Slack icons",
      creator: "Aldo Cervantes",
      link: "https://www.flaticon.com/free-icons/slack",
    },
    {
      iconName: "Database icons",
      creator: "juicy_fish",
      link: "https://www.flaticon.com/free-icons/database",
    },
    {
      iconName: "Terminal icons",
      creator: "Smashicons",
      link: "https://www.flaticon.com/free-icons/terminal",
    },
    {
      iconName: "TypeScript icons",
      creator: "Freepik",
      link: "https://www.flaticon.com/free-icons/typescript",
    },
    {
      iconName: "Tweet icons",
      creator: "Freepik",
      link: "https://www.flaticon.com/free-icons/tweet",
    },
    {
      iconName: "Quotes icons",
      creator: "Boris farias",
      link: "https://www.flaticon.com/free-icons/quotes",
    },
  ];

  return (
    <section id="attributions" className="mt-28">
      <div className="flex flex-col w-full">
        <h1 className="font-semibold text-5xl text-center">Attributions</h1>
      </div>
      <div className="flex flex-col w-full mt-10 px-6 sm:px-12 lg:px-24">
        <div>
          <p className="text-2xl text-center font-semibold">
            We would like to extend our sincere gratitude to the following
            creators and Flaticon for providing the icons used in this project:
          </p>
        </div>

        <div className="mt-6">
          <ul className="flex flex-col list-disc items-center">
            {iconAttributions.map(({ iconName, creator, link }, index) => (
              <li key={index} className="text-center mt-2 w-fit">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0077b6] hover:text-[#005f94] hover:underline transition-colors duration-200"
                >
                  {iconName} created by {creator} - Flaticon
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 mb-12 sm:mb-16">
          <p className="text-sm text-gray-600 text-center">
            All icons are provided by{" "}
            <a
              href="https://www.flaticon.com"
              className="text-[#0077b6] hover:text-[#005f94] transition-colors duration-200"
            >
              Flaticon
            </a>
            . We appreciate their platform and the talented creators who make
            their work available there.
          </p>
        </div>
      </div>
    </section>
  );
}
