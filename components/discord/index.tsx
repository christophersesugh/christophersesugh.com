import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowDown, BsArrowRight, BsDiscord } from "react-icons/bs";

export default function Discord() {
  return (
    <section
      id="discord"
      className="max-w-6xl flex justify-center items-center mx-auto px-16 mt-12 gap-12"
    >
      <div className="flex-col flex">
        <h2 className="text-3xl">
          <BsDiscord className="inline" /> Discord
        </h2>
        <h3 className="text-4xl mt-8">
          Tackle similar challenges with like minded people.
        </h3>
        <h3 className="text-4xl mt-8 text-slate-400">
          Join the discord and get better at building quality software together
          with like minded people.
        </h3>
        <Link href="/discord">
          <div className="flex items-center justify-center py-8  mt-6">
            <p className="mr-8 text-2xl justify-self-start">
              Learn more about CAS community on discord.
            </p>
            <button className="rounded-full text-xl p-4 border-2  border-slate-400 ">
              <BsArrowRight className="text-xl animate-pulse" />
            </button>
          </div>
        </Link>
      </div>
      <div className="hidden md:flex w-full">
        <Image
          src="/assets/discord2.png"
          alt="discord"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}
