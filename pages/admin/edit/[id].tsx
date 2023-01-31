import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMutation, useQuery, useQueryClient } from "react-query";
import AppHead from "components/app-head";
import { Form } from "components/admin";
import dashify from "dashify";
import { LoadingIndicator } from "components/loading-indicator";
import Markdown from "components/markdown";
import { client } from "utils/api-client";
import { useAuth } from "context/auth-context";

type PostProps = {
  title: string;
  image: string;
  tag: string;
  body: string;
};

type OnSubmitProps = {
  post: PostProps;
};

export default function EditPost() {
  const [postValues, setPost] = React.useState({
    title: "",
    image: "",
    tag: "",
    body: "",
  });
  const router = useRouter();
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const { id } = router.query;

  const update = useMutation({
    mutationFn: (post: any) => {
      return client(`posts/${post?._id}`, {
        data: post,
        token: user.token,
        method: "PATCH",
      } as any);
    },
    onSuccess: () => queryClient.invalidateQueries(["posts"]),
    onError: () => queryClient.refetchQueries(["posts"]),
  });

  const {
    data: post,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      client(`posts/${id}`).then((data: any) => {
        setPost({ ...data?.post } as any);
        return data.post;
      }),
  });
  return (
    <>
      <AppHead pageTitle={`Edit post | CAS`} pageType="website" />
      {isLoading ? (
        <h2 className="text-2xl">Loading...</h2>
      ) : isError ? (
        <p>{error instanceof Error ? error.message : "An error occured"}</p>
      ) : isSuccess ? (
        <div className="mx-8">
          <h1 className="text-center text-3xl">Edit post</h1>
          <Link href="/admin/dashboard">
            <button className="text-xl rounded-lg p-4 border-2 mt-8">
              Back to dashboard
            </button>
          </Link>
          <Form
            onSubmit={({ post }) => {
              return update.mutateAsync({
                ...post,
                slug: dashify(post.title),
              } as any);
            }}
            post={postValues}
            setPost={setPost}
          />
          <div className="max-w-2xl mx-auto my-20 ">
            <Markdown code={post?.body} />
          </div>
        </div>
      ) : null}
    </>
  );
}
