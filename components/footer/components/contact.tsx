import React from "react";
import Title from "./title";
import List from "./list";

export default function Contact() {
  return (
    <div>
      <Title title="Contact" />
      <List items={items} />
    </div>
  );
}

const items = [
  { name: "some", link: "thing" },
  { name: "some", link: "thing" },
];
