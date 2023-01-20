import React from "react";
import Image from "next/image";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  imgUrl: string;
  children?: React.ReactNode;
};

export default function PageHeader({
  title,
  subtitle,
  imgUrl,
  children,
}: PageHeaderProps) {
  return (
    <header className="px-16 flex flex-col justify-center items-center gap-12 md:flex-row-reverse max-w-6xl mx-auto mt-12 mb-40 -z-50">
      <Image
        src={imgUrl}
        alt="header image"
        width={400}
        height={600}
        className="w-full md:w-[60%]"
      />
      <div>
        <h1 className="text-4xl leading-normal ">
          {title}
          <br />
          <span className="mt-4 text-slate-400">{subtitle}</span>
        </h1>
        {children}
      </div>
    </header>
  );
}
