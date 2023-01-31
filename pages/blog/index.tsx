import React from "react";
import { Fade } from "react-awesome-reveal";
import { dehydrate, QueryClient, useQuery } from "react-query";
import AppHead from "components/app-head";
import { BlogPosts, BlogHeader, Form, LoadMore } from "components/blog";
import { client } from "utils/api-client";

export default function Blog() {
  const [query, setQuery] = React.useState("");
  const [postLimit, setPostLimit] = React.useState(9);

  const posts = useQuery({
    queryKey: ["posts", { query, postLimit }],
    queryFn: () =>
      client(
        `posts?title=${encodeURIComponent(query)}&limit=${postLimit}`
      ).then((data) => data.posts),
  });

  return (
    <Fade cascade duration={200}>
      <AppHead
        pageTitle={`Blog | CAS`}
        pageDescription="Helping change the world through quality software."
      />

      <BlogHeader />
      <div className="mb-40 mx-auto max-w-4xl flex flex-col ">
        <Fade cascade duration={100}>
          <Form query={query} setQuery={setQuery} />
          <BlogPosts postsData={posts} />
          <LoadMore
            setPostLimit={setPostLimit}
            posts={posts}
            onClick={() => setQuery("")}
          />
        </Fade>
      </div>
    </Fade>
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
