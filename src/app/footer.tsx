"use client";

import Image from "next/image";
import "./globals.css";
import { useTheme } from "../../contexts/themeContext.tsx";

export default function Footer() {
  interface SocialLinkProps {
    href: string;
    src: string;
    alt: string;
  }

  const SocialLink: React.FC<SocialLinkProps> = ({ href, src, alt }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image
        className={`${
          theme === "dark" ? "invert" : "invert-10"
        } hover:cursor-pointer ${
          theme === "dark" ? "invert-80" : "hover:invert-0"
        } transition-colors duration-200`}
        src={src}
        alt={alt}
        width={28}
        height={28}
      />
    </a>
  );

  const { theme } = useTheme();
  const socialLinks: SocialLinkProps[] = [
    {
      href: "mailto:email@rohanmahapatra.com",
      src: "/EmailIcon.png",
      alt: "Email",
    },
    // {
    //   href: "https://linkedin.com/in/your-profile",
    //   src: "/LinkedInIcon.png",
    //   alt: "LinkedIn",
    // },
    {
      href: "https://github.com/Melter225",
      src: "/GitHubIcon.png",
      alt: "Github",
    },
    {
      href: "https://hackclub.slack.com/team/U07HEMQFXHA",
      src: "/SlackIcon.png",
      alt: "Slack",
    },
    {
      href: "https://discord.com/users/951196723072598098",
      src: "/DiscordIcon.png",
      alt: "Discord",
    },
    {
      href: "https://x.com/melter225",
      src: "/XIcon.png",
      alt: "X",
    },
    // {
    //   href: "https://tiktok.com/@your-username",
    //   src: "/TiktokIcon.png",
    //   alt: "Tiktok",
    // },
    // {
    //   href: "https://instagram.com/your-username",
    //   src: "/InstagramIcon.png",
    //   alt: "Instagram",
    // },
  ];

  return (
    <div className="grid w-full">
      <div
        className={`z-50 fixed flex justify-self-end justify-center gap-x-6 ${
          theme === "dark" ? "bg-[#050A16]" : "bg-[#e9eee6]"
        } border-2 ${
          theme === "dark" ? "border-neutral-800" : "border-neutral-400"
        } rounded-full w-[20rem] h-12 mr-5 bottom-5 p-2`}
      >
        {socialLinks.map((link) => (
          <SocialLink
            key={link.alt}
            href={link.href}
            src={link.src}
            alt={link.alt}
          />
        ))}
      </div>
    </div>
  );
}
