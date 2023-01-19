import React from "react";
import { useRouter } from "next/router";
import { PostCard, TotalPosts } from "components/admin";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import { QueryClient, useMutation, useQuery } from "react-query";
import { client } from "utils/api-client";
import Link from "next/link";

export default function Dashboard() {
  const router = useRouter();
  const queryClient = new QueryClient();

  const {
    data: posts,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => client(`posts`).then((data) => data.posts),
  });

  const deletePost = useMutation({
    mutationFn: ({ id }: { id: string }) => {
      return client(`posts/${id}`, { method: "DELETE" } as any);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  let user = true;
  React.useLayoutEffect(() => {
    if (!user || user === null) {
      router.push("/me");
    }
  }, [router, user]);

  return (
    <div className="flex flex-col max-w-4xl border-2 rounded-lg md:mx-auto my-20 mx-4 p-4">
      <div className="w-full flex flex-col md:flex-row justify-between gap-8 mb-8">
        <div className="rounded-lg p-4 border-2 ">
          {isSuccess ? (
            <>
              <p className="text-6xl">{posts?.length} </p>
              <span>posts</span>
            </>
          ) : (
            <p>0 posts</p>
          )}
        </div>
        <Link href="/admin/post">
          <button className="border-2 rounded-lg self-start p-2">
            Add post
            <FaPlus className="inline ml-4" />
          </button>
        </Link>
        <button className="border-2 rounded-lg self-start p-2">
          Log out
          <FaArrowRight className="inline ml-4" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-[80%] mx-auto my-12">
        {isSuccess ? (
          posts?.length ? (
            <>
              {posts.map((post: any) => (
                <PostCard key={post._id} post={post} />
              ))}
            </>
          ) : (
            <p>No posts</p>
          )
        ) : null}
      </div>
    </div>
  );
}
