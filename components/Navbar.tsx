import Image from "next/image";
import Link from "next/link";
import { links } from "..";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-[1440px] px-6 mx-auto py-4 flex items-center justify-between ">
      <div className="flex items-center justify-center">
        <Image
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="logo"
          width={80}
          height={80}
        />
        <div className="flex gap-16 ml-28">
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={link.name}
              className="text-sm flex items-center gap-1"
            >
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.5em #00FF19" }}
                  className="bg-[#00FF19] inline-block w-1.5 h-1.5 rounded-full"
                ></span>
              )}
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
