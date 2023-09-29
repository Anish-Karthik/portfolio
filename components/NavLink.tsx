import Link from "next/link";
import { type } from "os";

type NavLinkProps = {
  href: string;
  title: string;
};


const NavLink = ({ href, title } : NavLinkProps) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
