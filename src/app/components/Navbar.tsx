"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLinks = {
  name: string;
  href: string;
};

const navlinks: NavLinks[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="flex justify-between items-center max-w-7xl mx-auto border-b p-2">
      <div className="text-3xl font-bold">
        <Link href="/">Next js</Link>
      </div>
      <ul className="flex items-center gap-3">
        {navlinks.map((item, ind) => (
          <li key={ind}>
            <Link
              className={`link ${pathname === item.href ? "pb-1 border-b" : ""}`}
              href={item.href}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <button className="px-5 py-1.5 border-none bg-white cursor-pointer text-black rounded-2xl">
          Login
        </button>
      </div>
    </header>
  );
};

export default Navbar;
