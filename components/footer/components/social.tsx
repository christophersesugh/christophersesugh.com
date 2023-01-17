import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import Title from "./title";

export default function Social() {
  return (
    <div className="flex flex-col items-start">
      <h1 className="font-black text-2xl">Christopher A. Sesugh</h1>
      <p className="text-slate-400 text-xl my-4">
        Software Engineer and Educator.
      </p>
      <div className="flex gap-6 justify-center items-center mt-4">
        {handles.map((handle) => (
          <Link href={handle.link} key={handle.link}>
            <button className="text-2xl">{handle.icon}</button>
          </Link>
        ))}
      </div>
    </div>
  );
}

const handles = [
  { icon: <BsGithub />, link: "https://github.com/christophersesugh" },
  {
    icon: <BsLinkedin />,
    link: "https://www.linkedin.com/christopher-sesugh-265332176/",
  },
  { icon: <BsTwitter />, link: "https://twitter.com/coding_simba" },
];
