import React from "react";
import Link from "next/link";

type ListProps = {
  items: {
    map(arg0: (item: any) => JSX.Element): React.ReactNode;
  };
};

export default function List({ items }: ListProps) {
  return (
    <div className="flex flex-col gap-2 justify-center items-start mt-4">
      {items.map((item: { name: string; link: string }) => (
        <Link href={item.link} key={item.link}>
          <button className="hover:underline hover:underline-offset-4 focus:underline focus:underline-offset-4 text-md transition-all duration-300">
            {item.name}
          </button>
        </Link>
      ))}
    </div>
  );
}
