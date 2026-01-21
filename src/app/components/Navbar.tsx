import Link from "next/link";
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
  return (
    <header className="flex justify-between items-center max-w-7xl mx-auto">
      <div className="text-3xl font-bold">
        <Link href="/">Next js</Link>
      </div>
      <ul className="flex items-center gap-3">
        {navlinks.map((item, ind) => (
          <li key={ind}>
            <Link href={item.href}>{item.name}</Link>
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
