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
  { name: "Email Chris", link: "/contact" },
  { name: "Book a Call", link: "/contact#book-a-call" },
];
