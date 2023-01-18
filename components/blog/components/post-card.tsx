import Image from "next/image";
import Link from "next/link";
import React from "react";
import readingTime from "reading-time";

type PostCardProps = {
  post: {
    title: string;
    image: string;
    slug: string;
    tags: [string];
    body: string;
  };
};

export default function PostCard({ post }: PostCardProps) {
  const result = readingTime(post?.body);

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="p-4 flex flex-col justify-center items-center">
        <Image
          src={post?.image}
          height={150}
          width={200}
          alt={post?.title}
          className="w-full rounded-lg"
        />
        <p className="text-xl font-extrabold text-slate-400 self-start my-4">
          {result.text}
        </p>
        <h1 className="self-start text-3xl font-bold">{post?.title}</h1>
      </article>
    </Link>
  );
}
