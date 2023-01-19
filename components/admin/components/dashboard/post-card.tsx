import { error } from "console";
import Link from "next/link";
import React from "react";
import { useMutation, QueryClient } from "react-query";
import { client } from "utils/api-client";

export function PostCard({ post }: any) {
  const queryClient = new QueryClient();

  const deletePost = useMutation({
    mutationFn: ({id}: any) => {
      return client(`posts/${id}`, { method: "DELETE" } as any);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  return (
    <div className="bg-slate-400 p-4 rounded-lg">
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
          onClick={() => deletePost.mutateAsync({ id: post._id })}
        >
          {/* {deletePost.isLoading ? (
            "Deleting..."
          ) : deletePost.isError ? (
            <>{deletePost?.error?.message as any}</>
          ) : deletePost.isSuccess ? (
            "Delete success!"
          ) : (
            "Delete"
          )} */}
          {deletePost.isError ? (deletePost.error as any) : null}
        </button>
        <Link href={`/admin/edit/${post._id}`}>
          <button className="rounded-md bg-blue-700 p-2">Edit</button>
        </Link>
      </div>
    </div>
  );
}
