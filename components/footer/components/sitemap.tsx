import React from "react";
import Title from "./title";
import List from "./list";

export default function Sitemap() {
  return (
    <div>
      <Title title="Sitemap" />
      <List items={items} />
    </div>
  );
}

const items = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/posts" },
  { name: "Discord", link: "/discord" },
  { name: "About", link: "/about" },
  { name: "Sitemap", link: "#" },
];
