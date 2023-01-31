import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function About() {
  return (
    <section
      id="about"
      className="px-16 flex flex-col justify-center items-center gap-12 md:flex-row max-w-5xl mx-auto mt-32 md:my-20 mb-12 pt-12"
    >
      <Image
        src="https://res.cloudinary.com/christo/image/upload/v1675203108/chris_ajcw3z.jpg"
        width={300}
        height={200}
        alt="Christopher Sesugh"
        className="md:self-start rounded-3xl md:mx-14 h-[200px] w-[200px]"
      />

      <div>
        <h2 className="text-4xl">
          Hi, I am Christopher Aondona Sesugh. I am a software engineer and a
          teacher. I love building quality software and sharing my existing
          knowledge across the globe.
        </h2>
        <h3 className="text-3xl text-slate-400 mt-8">
          I am also an athlete and love exercising by going to the gym or doing
          cardiovascular exercises at home.
        </h3>
        <Link href="/about">
          <button className="rounded-xl  text-xl p-4 mt-12 border-2 border-slate-400 hover:border-slate-800 dark:hover:border-[#fff] flex items-center">
            <BsArrowRight
              className="text-xl inline animate-pulse mr-4"
              aria-label="learn more about CAS"
            />
            <span>Learn more about Me.</span>
          </button>
        </Link>
      </div>
    </section>
  );
}
