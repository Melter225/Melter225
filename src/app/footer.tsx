import Image from "next/image";
import "./globals.css";

interface SocialLinkProps {
  href: string;
  src: string;
  alt: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, src, alt }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-80 transition-opacity duration-200"
  >
    <Image
      className="invert hover:cursor-pointer invert-80 transition-colors duration-200"
      src={src}
      alt={alt}
      width={28}
      height={28}
    />
  </a>
);

export default function Footer() {
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
      <div className="z-50 fixed flex justify-self-end justify-center gap-x-6 bg-[#050A16] border-2 border-neutral-800 rounded-full w-[20rem] h-12 mr-5 bottom-5 p-2">
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
