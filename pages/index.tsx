import React from "react";
import AppHead from "components/app-head";
import Hero from "components/hero";
import About from "components/about";
import Discord from "components/discord";
import { Posts } from "components/blog/components/home-posts";
import { client } from "utils/api-client";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

function HomePage({ posts }: any) {
  return (
    <>
      <AppHead title="Christopher A. Sesugh" />
      <Hero />
      {/* <Fade duration={3000}> */}
      <About />
      {/* </Fade> */}
      {/* <Fade duration={3000}> */}
      <Discord />
      {/* </Fade> */}
      <Posts posts={posts} />
      <Link href="/admin/dashboard">
        <button className="fixed right-12 bottom-12 p-6 bg-slate-300 rounded-full">
          +
        </button>
      </Link>
    </>
  );
}

export default HomePage;

export const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: { posts },
  };
};

async function getPosts() {
  const posts = await client(`posts?limit=${3}`);
  return posts.posts;
}
