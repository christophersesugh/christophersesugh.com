import React from "react";
import Image from "next/image";

export function BlogHeader() {
  return (
    <div className="px-16 flex flex-col justify-center items-center gap-12 md:flex-row-reverse max-w-6xl mx-auto mt-12">
      <Image
        src="/assets/blog.webp"
        alt="header image"
        width={600}
        height={400}
        className="w-full md:w-[60%] rounded-[4rem]"
      />
      <div>
        <h1 className="text-4xl leading-snug ">
          Learn to develop quality software with awesome articles.
          <p className="text-slate-400">Find the latest of my writing below.</p>
        </h1>
      </div>
    </div>
  );
}
