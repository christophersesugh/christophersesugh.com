import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { dehydrate, QueryClient } from "react-query";
import AppHead from "components/app-head";
import Markdown from "components/markdown";
import { readingTime } from "reading-time-estimator";
import { BsArrowLeft } from "react-icons/bs";
import { client } from "utils/api-client";

export default function Post({ post }: any) {
  const router = useRouter();
  // const result = readingTime(post?.body, 238, "en");
  if (router.isFallback) {
    return <p>Loading..</p>;
  }
  return (
    <div className="my-20 max-w-2xl mx-8 md:mx-auto">
      <AppHead title={`${post?.title} | CAS`} />
      <div className="my-20">
        <Link href="/blog">
          <button className="text-xl text-bold">
            <BsArrowLeft className="inline mr-4 text-2xl font-extrabold" /> Back
            to review
          </button>
        </Link>
      </div>
      {post ? (
        <div>
          <div className="max-w-2xl mx-4 md:mx-auto flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold capitalize">
              {post?.title}
            </h1>
            <h2 className="text-xl text-slate-400 mt-4 mb-8">
              {new Date(post?.createdAt)
                .toUTCString()
                .substring(0, post?.createdAt.length - 8)}
              {"  "}
              {/* - {result?.text} */}
            </h2>
            <div>
              {post?.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-2xl p-2 bg-zinc-500 text-slate-300 mr-4 mb-12 inline-block"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="block w-full relative h-auto">
              <Image
                // fill
                width={300}
                height={300}
                src={post?.image}
                alt={post?.title}
                className="rounded block relative w-full mb-12"
              />
            </div>
            <div>
              <Markdown code={post?.body} />
            </div>
          </div>
        </div>
      ) : (
        <p> post with given slug not found</p>
      )}
    </div>
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
    fallback: true,
  };
};

export const getStaticProps = async (context: any) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    ["posts"],
    await client("posts").then((data) => data.posts)
  );
  const { slug } = context.params;
  const post = await getPosts({ slug });
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      post: post[0],
    },
  };
};

async function getPosts({ slug }: { slug?: string }) {
  const posts = await client(`posts?slug=${slug}`);
  return await posts.posts;
}
