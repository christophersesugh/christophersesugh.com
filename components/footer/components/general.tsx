import React from "react";
import Link from "next/link";
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
  { name: "some", link: "thing" },
  { name: "some", link: "thing" },
  { name: "some", link: "thing" },
  { name: "some", link: "thing" },
];
