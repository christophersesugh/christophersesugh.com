import React from "react";

export default function Title({ title }: { title: string }) {
  return <h2 className="text-lg font-black mb-4">{title}</h2>;
}
