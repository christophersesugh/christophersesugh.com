import React from "react";
import Title from "./title";
import List from "./list";

export default function General() {
  return (
    <div>
      <Title title="General" />
      <List items={items} />
    </div>
  );
}

const items = [
  { name: "My Mission", link: "/transparency#mission" },
  { name: "Privacy policy", link: "/transparency" },
  { name: "Terms of use", link: "/transparency#terms-of-use" },
];
