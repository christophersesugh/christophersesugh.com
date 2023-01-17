import React from "react";
import { useQuery } from "react-query";
import AppHead from "components/app-head";
import Hero from "components/hero";
import About from "components/about";
import Discord from "components/discord";
import Posts from "components/posts";
import db from "utils/db";
import "../utils/axios";
import axios from "axios";

let config = {
  url: "posts",
  method: "get",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Credentials": "true",
  },
};
function HomePage({ postsData }: any) {
  const { data } = useQuery({
    queryKey: "posts",
    queryFn: () => axios(config).then((data) => data),
  });
  console.log(data);

  return (
    <>
      <AppHead title="Christopher A. Sesugh" />
      <Hero />
      <About />
      <Discord />
      <Posts posts={postsData} />
    </>
  );
}

export default HomePage;

export const getStaticProps = async () => {
  const posts = await db
    .collection("posts")
    .orderBy("createdAt", "desc")
    .limit(3)
    .get();
  const postsData = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
  }));
  return {
    props: { postsData },
    revalidate: 10,
  };
};
