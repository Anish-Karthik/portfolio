import Image from "next/image";
import Link from "next/link";
import React from "react";
import GithubIcon from "@/public/github-icon.svg";
import LinkedinIcon from "@/public/linkedin-icon.svg";
import EmailIcon from "@/public/email-icon.svg";
import TwitterIcon from "@/public/twitter-icon.svg";
import { cn } from "@/lib/utils";
const socials = [
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/anish-karthik/",
    icon: LinkedinIcon,
    alt: "Linkedin Icon",
    style: ""
  },
  {
    title: "Github",
    href: "https://github.com/Anish-Karthik",
    icon: GithubIcon,
    alt: "Github Icon",
    style: ""
  },
  {
    title: "Mail Me",
    href: "mailto: anishkarthik.54321@gmail.com",
    icon: EmailIcon,
    alt: "Email Icon",
    style: "px-1"
  }, 
  {
    title: "Twitter",
    href: "https://twitter.com/Anish_Karthik_A",
    icon: TwitterIcon,
    alt: "Twitter Icon",
    style: "px-1"
  }
]


const Footer = () => {
  return (
    <footer id="contact" className=" flex flex-col footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container py-12 sm:px-12 flex gap-2 justify-between">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold flex items-center"
        >
          <Image 
            src="/images/logo.png"
            className="rounded-full zoom-in-75"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <div className="socials flex flex-row justify-evenly gap-2 sm:ml-[5.5rem]">
          {socials.map((social, index) => (
            <Link href={social.href} key={index} className={cn('flex ',social.style)} >
              <Image src={social.icon} alt={social.alt}  />
            </Link>
          ))}
        </div>
        
        <p className="text-slate-600 flex items-center">All rights reserved.</p>
      </div>
      <div className="container mt-[-2rem] pb-10 sm:px-12 flex items-center justify-evenly gap-2">
          <p className="text-white text-sm ">
            Made with ❤️ by Anish Karthik
          </p>
      </div>
    </footer>
  );
};

export default Footer;
