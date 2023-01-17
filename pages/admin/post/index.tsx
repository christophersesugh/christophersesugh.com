import React from "react";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import dashify from "dashify";
import Markdown from "components/markdown";
import AppHead from "components/app-head";
import { Form } from "components/admin";

type PostProps = {
  title: string;
  image: string;
  tags: string;
  body: string;
};

type OnSubmitProps = {
  post: PostProps;
};

export default function Post() {
  const [post, setPost] = React.useState({
    title: "",
    image: "",
    tags: "",
    body: ``,
  });
  const queryClient = useQueryClient();

  const create = useMutation({
    mutationFn: (post) => {
      return axios.post("/api/post", post);
    },
    onSuccess: () => queryClient.invalidateQueries("posts"),
  });

  return (
    <>
      <AppHead title="Create post | CSA" />
      <section className="max-w-4xl mx-auto">
        <h1 className="text-center text-3xl">Create a blog post</h1>
        <Form
          onSubmit={({ post }: OnSubmitProps) => {
            const tags = post.tags.split(",").map((tag: string) => tag);
            return create.mutateAsync({
              ...post,
              slug: dashify(post.title),
              tags: tags,
            } as any);
          }}
          post={post}
          setPost={setPost}
        />
        <div className="max-w-2xl mx-auto my-20 ">
          <Markdown code={post.body} />
        </div>
      </section>
    </>
  );
}
