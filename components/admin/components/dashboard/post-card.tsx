import React from "react";
import Link from "next/link";
import { useMutation, QueryClient } from "react-query";
import { client } from "utils/api-client";

export function PostCard({ post }: any) {
  const queryClient = new QueryClient();

  const deletePost = useMutation({
    mutationFn: ({ id }: { id: string }) => {
      return client(`posts/${id}`, { method: "DELETE" } as any);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["posts"]);
      queryClient.refetchQueries(["posts"]);
    },
  });

  return (
    <Link href={`/post/${post.slug}`}>
      <div className="bg-slate-400 p-4 rounded-lg text-slate-200">
        <div className="flex justify-between gap-4">
          <p className="text-xl">{post.title}</p>
          <p className="text-md">
            {new Date(post.createdAt)
              .toUTCString()
              .substring(0, post.createdAt.length - 8)}
          </p>
        </div>
        <div className="flex justify-between mt-8">
          <button
            className="rounded-md bg-red-500 p-2"
            onClick={() => deletePost.mutate({ id: post._id })}
          >
            {deletePost.isLoading ? (
              "Deleting..."
            ) : deletePost.isError ? (
              <>
                {deletePost?.error && deletePost.error instanceof Error
                  ? deletePost.error.message
                  : deletePost.error}
              </>
            ) : deletePost.isSuccess ? (
              "Delete success!"
            ) : (
              "Delete"
            )}
          </button>
          <Link href={`/blog/${post.slug}`}>
            <button className="rounded-md bg-zinc-700 p-2">View</button>
          </Link>
          <Link href={`/admin/edit/${post._id}`}>
            <button className="rounded-md bg-blue-700 p-2">Edit</button>
          </Link>
        </div>
      </div>
    </Link>
  );
}
