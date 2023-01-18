import React from "react";
import Link from "next/link";
import Image from "next/image";
import { dehydrate, QueryClient, useQuery } from "react-query";
import AppHead from "components/app-head";
import PostCard from "components/blog/components/post-card";
import { FaPlus } from "react-icons/fa";
import { client } from "utils/api-client";
import LoadingIndicator from "components/blog/components/loading-indicator";
import Loading from "components/blog/components/loading-indicator";

export default function Blog() {
  const [query, setQuery] = React.useState("");
  const [postLimit, setPostLimit] = React.useState(2);
  const [tag, setTag] = React.useState("");
  const [queried, setQueried] = React.useState(false);

  const {
    data: posts,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["posts", { query, postLimit, tag }],
    queryFn: () =>
      client(
        `posts?title=${encodeURIComponent(query)}&limit=${postLimit}&tag=${tag}`
      ).then((data) => data.posts),
  });

  return (
    <>
      <AppHead title="Blog | CAS" />
      <div className="px-16 flex flex-col justify-center items-center gap-12 md:flex-row-reverse max-w-6xl mx-auto mt-12 mb-40">
        <Image
          src="/assets/blog.png"
          alt="header image"
          width={400}
          height={600}
        />
        <div>
          <h1 className="text-4xl leading-snug ">
            Learn to develop quality software with awesome articles.
            <p className="text-slate-400">
              Find the latest of my writing below.
            </p>
          </h1>
        </div>
      </div>
      <div className="my-40 mx-auto max-w-4xl flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-4 ">
          {isLoading
            ? Array(9)
                .fill(null)
                .map((_, index) => <Loading key={`loading-${index}`} />)
            : null}
          {isSuccess ? (
            <>
              {posts.map((post: any) => (
                <div key={post.id}>
                  <PostCard post={post} />
                </div>
              ))}
            </>
          ) : null}
        </div>
        <button
          onClick={() => setPostLimit((limit) => limit + 2)}
          className="mt-20 rounded-3xl p-4 border-2 border-slate-400 dark:hover:border-white transition-all duration-300 hover:border-black self-center align-self-center"
        >
          Load more articles <FaPlus className="inline ml-6" />
        </button>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["posts"], getPosts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

async function getPosts() {
  const posts = await client(`posts`);
  return posts.posts;
}
