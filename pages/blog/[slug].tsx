import React from "react";
import { client } from "utils/api-client";
import { Slug } from "components/blog";
import AppHead from "components/app-head";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

export default function Post({ post }: any) {
  return (
    <>
      <AppHead
        pageTitle={`${post.title} | CAS`}
        pageDescription={post.title}
        pageImage={post.image}
        pageUrl={`https://www.christophersesugh.com/${post.slug}`}
      />

      <div className="my-20 max-w-2xl px-8 mx-auto">
        <Slug post={post} />
        <hr className="my-8" />
        <section>
          <h2 className="text-xl mb-4">Written by Christopher A. Sesugh</h2>
          <p className="text-lg text-slate-400">
            Christopher A. Sesugh is a software engineer and an educator. His
            aim is to help change the world with quality software by sharing his
            existing knowledge and building quality software products.
          </p>

          <Link href="/about">
            <button className="rounded-xl  text-xl p-4 mt-8 mb-12 border-2 border-slate-400 hover:border-slate-800 dark:hover:border-[#fff] flex items-center mx-auto transition-all">
              <BsArrowRight
                className="text-xl inline animate-pulse mr-4"
                aria-label="learn more about CAS"
              />
              <span>Learn more about Me.</span>
            </button>
          </Link>
        </section>
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const response = await client("posts").then((data) => data.posts);
  const paths = response.map((post: { slug: string }) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context: any) => {
  const { slug } = context.params;
  const post = await getPosts({ slug });

  return {
    props: {
      post: post[0],
    },
  };
};

async function getPosts({ slug }: { slug?: string }) {
  const posts = await client(`posts?slug=${slug}`);
  return await posts.posts;
}
