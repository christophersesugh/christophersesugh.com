import React from "react";
import Link from "next/link";
import AppHead from "components/app-head";
import db from "utils/db";

export default function Blog({ postsData }: any) {
  return (
    <>
      <AppHead title="Blog | CSA" />
      <h1>Posts</h1>
      {postsData.map((post: any) => (
        <div key={post.id}>
          <Link href={`/blog/${post.slug}`}>
            <button>{post.title}</button>
          </Link>
          <br />
        </div>
      ))}
    </>
  );
}

export const getStaticProps = async () => {
  const posts = await db.collection("posts").orderBy("createdAt", "desc").get();
  const postsData = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
  }));
  return {
    props: { postsData },
    revalidate: 10,
  };
};
