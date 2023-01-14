import React from "react";
import { useTheme } from "utils/hooks/use-theme";
import MainNav from "./components/main-nav";
import MobileNav from "./components/mobile-nav";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <MainNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export const navItems = [
  {
    name: "blog",
    link: "/posts",
  },
  {
    name: "discord",
    link: "/discord",
  },
  {
    name: "about",
    link: "/about",
  },
];
