import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowDown } from "react-icons/bs";
import PageHeader from "components/page-header";

export default function Hero() {
  return (
    // <header className="px-16 flex flex-col justify-center items-center gap-12 md:flex-row-reverse max-w-6xl mx-auto mt-12 mb-40">
    //   <Image
    //     src="/assets/header.png"
    //     alt="header image"
    //     width={400}
    //     height={600}
    //   />
    //   <div>
    //     <h1 className="text-4xl leading-loose">
    //       Helping change the world through quality software.
    //     </h1>
    //     <div className="flex flex-col">
    //       <Link href="/blog">
    //         <button className="rounded-[2em] bg-[#1f2028] text-[#fff] dark:bg-[#fff] dark:text-[#1f2028] text-xl p-6 mt-8">
    //           Read the Blog
    //         </button>
    //       </Link>

    //       <Link href="/#about">
    //         <button className="rounded-xl  text-xl p-4 mt-6 border-2 border-slate-400 hover:border-slate-800 dark:hover:border-[#fff] flex items-center">
    //           <BsArrowDown className="text-xl inline animate-bounce mr-4" />
    //           <span>Learn more about CAS.</span>
    //         </button>
    //       </Link>
    //     </div>
    //   </div>
    // </header>

    <PageHeader
      title="Helping change the world through quality software."
      imgUrl="/assets/header.png"
      imgWidth="w-[60%]"
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
