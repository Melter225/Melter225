import Image from "next/image";
import "./globals.css";

export default function Footer() {
  return (
    <div className="grid w-full">
      <div className="z-50 fixed flex justify-self-end justify-center gap-x-5 bg-[#050A16] border-2 border-neutral-800 rounded-full w-[26rem] h-12 mr-5 bottom-5 p-2">
        <Image
          className="invert hover:cursor-pointer invert-80 transition-colors duration-200"
          src="/EmailIcon.png"
          alt="Email"
          width={27}
          height={20}
        />
        <Image
          className="invert hover:cursor-pointer invert-80 transition-colors duration-200"
          src="/LinkedInIcon.png"
          alt="LinkedIn"
          width={27}
          height={20}
        />
        <Image
          className="invert hover:cursor-pointer invert-80 transition-colors duration-200"
          src="/GitHubIcon.png"
          alt="Github"
          width={27}
          height={20}
        />
        <Image
          className="invert hover:cursor-pointer invert-80 transition-colors duration-200"
          src="/SlackIcon.png"
          alt="Slack"
          width={27}
          height={20}
        />
        <Image
          className="invert hover:cursor-pointer invert-80 transition-colors duration-200"
          src="/DiscordIcon.png"
          alt="Discord"
          width={27}
          height={20}
        />
        <Image
          className="invert hover:cursor-pointer invert-80 transition-colors duration-200"
          src="/XIcon.png"
          alt="X"
          width={27}
          height={20}
        />
        <Image
          className="invert hover:cursor-pointer invert-80 transition-colors duration-200"
          src="/TiktokIcon.png"
          alt="Tiktok"
          width={27}
          height={20}
        />
        <Image
          className="invert hover:cursor-pointer invert-80 transition-colors duration-200"
          src="/InstagramIcon.png"
          alt="Instagram"
          width={27}
          height={20}
        />
      </div>
    </div>
  );
}
