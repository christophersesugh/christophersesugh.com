import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowDown } from "react-icons/bs";
import PageHeader from "components/page-header";

export default function Hero() {
  return (
    <PageHeader
      title="Helping change the world through quality software."
      headerImage={
        <Image
          src="/assets/header.png"
          width={300}
          height={200}
          alt="login"
          className="self-start rounded-xl w-full md:w-[80%]"
        />
      }
    >
      <div className="flex flex-col">
        <Link href="/blog">
          <button className="rounded-[2em] bg-[#1f2028] text-[#fff] dark:bg-[#fff] dark:text-[#1f2028] text-xl p-6 mt-8">
            Read the Blog
          </button>
        </Link>

        <Link href="/#about">
          <button className="rounded-xl  text-xl p-4 mt-12 border-2 border-slate-400 hover:border-slate-800 dark:hover:border-[#fff] flex items-center">
            <BsArrowDown className="text-xl inline animate-bounce mr-4" />
            <span>Learn more about CAS.</span>
          </button>
        </Link>
      </div>
    </PageHeader>
  );
}
