import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { BsSun, BsMoon } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { navItems } from "..";
import NavButton from "./nav-button";
import { useTheme } from "utils/hooks/use-theme";
import Link from "next/link";

type MainNavProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function MainNav({ isOpen, setIsOpen }: MainNavProps) {
  const [toggleThemeMode, darkMode] = useTheme();

  return (
    <nav className="transition ease-in duration-300 flex justify-between px-8 py-12 items-center">
      <Link href="/">
        <span className="text-2xl font-black text-bold hover:underline underline-offset-8">
          Christopher A. Sesugh
        </span>
      </Link>
      <ul className="hidden md:flex justify-between gap-6 items-center">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.link}>
              <NavButton className="capitalize hover:underline underline-offset-8 transition-all duration-300 hover:ease-linear dark:text-slate-300">
                {item.name}
              </NavButton>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-6">
        <NavButton
          onClick={() => setIsOpen(!isOpen)}
          className=" md:hidden rounded-full border-2 p-2 hover:border-black dark:hover:border-slate-500 transition-all duration-300
        "
        >
          {isOpen ? (
            <FaTimes className="text-3xl" />
          ) : (
            <FaBars className="text-3xl" />
          )}
        </NavButton>
        <NavButton
          onClick={toggleThemeMode}
          className="hidden md:block rounded-full border-2 p-2 hover:border-black dark:hover:border-slate-500
        "
        >
          {darkMode ? (
            <BsMoon className="text-3xl" />
          ) : (
            <BsSun className="text-3xl" />
          )}
        </NavButton>
        <NavButton
          className="rounded-full border-2 p-2 hover:border-black dark:hover:border-slate-500
        "
        >
          <BsPersonCircle className="text-3xl" />
        </NavButton>
      </div>
    </nav>
  );
}
