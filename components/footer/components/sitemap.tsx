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
  { name: "some", link: "thing" },
  { name: "some", link: "thing" },
  { name: "some", link: "thing" },
  { name: "some", link: "thing" },
  { name: "some", link: "thing" },
  { name: "some", link: "thing" },
];
