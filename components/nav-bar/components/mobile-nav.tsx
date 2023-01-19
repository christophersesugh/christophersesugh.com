import React from "react";
import Link from "next/link";
import { BsSun, BsMoon } from "react-icons/bs";
import { navItems } from "..";
import NavButton from "./nav-button";
import { useTheme } from "utils/hooks/use-theme";
import { Slide } from "react-awesome-reveal";

type MobileNavProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  const [toggleThemeMode, darkMode] = useTheme();
  function handleButtonClick() {
    toggleThemeMode();
    setIsOpen(false);
  }

  return isOpen ? (
    <Slide direction="up">
      <nav className="w-full md:hidden absolute bg-[#fff] dark:bg-[#1f2028] border-b-2">
        <ul className="w-full">
          {navItems.map((item) => (
            <li key={item.name} className="border-t-2 py-8 px-4 w-full">
              <Link href={item.link}>
                <NavButton
                  onClick={() => setIsOpen(false)}
                  className="capitalize w-full"
                >
                  {item.name}
                </NavButton>
              </Link>
            </li>
          ))}
          <li className="border-t-2 py-8 px-4 flex justify-center">
            {/* toggle theme mode */}
            <NavButton
              onClick={handleButtonClick}
              className="rounded-3xl border-2 p-2"
            >
              {darkMode ? (
                <>
                  <BsSun className="text-3xl inline mr-4" /> light mode
                </>
              ) : (
                <>
                  <BsMoon className="text-3xl inline mr-4" /> dark mode
                </>
              )}
            </NavButton>
          </li>
        </ul>
      </nav>
    </Slide>
  ) : null;
}
