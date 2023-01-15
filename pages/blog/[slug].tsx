import React from "react";
import AppHead from "components/app-head";
import { useRouter } from "next/router";
import db from "utils/db";
import LoadingIndicator from "components/loading-indicator";
import Markdown from "components/markdown";

export default function Post({ post }: any) {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadingIndicator path="/blog" />;
  }

  return (
    <div className="my-20 max-w-2xl mx-8 md:mx-auto">
      <AppHead title={`Blog post | CSA`} />
      <button>Back to review</button>
      {post ? (
        <>
          <AppHead title={`${post.title} | CSA`} />
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-extrabold text-center">
              {post.title}
            </h1>
            <h2 className="text-xl text-slate-400 text-center">
              {post.createdAt.substring(0, post.createdAt.length - 13)}
            </h2>
            <div className="max-w-2xl view text-lg">
              <Markdown code={post.body} />
            </div>
          </div>
        </>
      ) : (
        <p> no post found</p>
      )}
    </div>
  );
}

export const getStaticPaths = async () => {
  const posts = await db.collection("posts").get();
  const paths = posts.docs.map((post) => ({
    params: {
      slug: post.data().slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const { slug } = context.params;
  const posts = await db.collection("posts").where("slug", "==", slug).get();
  const post = posts.docs.map((post) => post.data());
  if (post.length) {
    return {
      props: {
        post: post[0],
      },
    };
  } else {
    return {
      props: {},
    };
  }
};
