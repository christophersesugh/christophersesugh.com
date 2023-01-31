import React from "react";
import Link from "next/link";
import { useMutation, useQueryClient } from "react-query";
import dashify from "dashify";
import Markdown from "components/markdown";
import AppHead from "components/app-head";
import { Form } from "components/admin";
import { client } from "utils/api-client";
import { useAuth } from "context/auth-context";

type PostProps = {
  title: string;
  image: string;
  body: string;
};

type OnSubmitProps = {
  post: PostProps;
};

export default function Post() {
  const [post, setPost] = React.useState({
    title: "",
    image: "",
    tag: "",
    body: ``,
  });
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const create = useMutation({
    mutationFn: (post: any) => {
      return client("posts", { data: post, token: user.token } as any);
    },
    onSuccess: () => queryClient.invalidateQueries("posts"),
  });

  return (
    <>
      <AppHead pageTitle={`Create post | CAS`} pageType="website" />

      <section className="max-w-4xl mx-auto ">
        <h1 className="text-center text-3xl">Create a blog post</h1>
        <Link href="/admin/dashboard">
          <button className="text-xl rounded-lg p-4 border-2 mt-8">
            Back to dashboard
          </button>
        </Link>
        <Form
          onSubmit={({ post }: OnSubmitProps) => {
            return create.mutateAsync({
              ...post,
              slug: dashify(post.title),
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
