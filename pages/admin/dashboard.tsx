import React from "react";
import { useRouter } from "next/router";
import { PostCard, TotalPosts } from "components/admin";
import { FaArrowRight } from "react-icons/fa";
import { QueryClient, useMutation, useQuery } from "react-query";
import { client } from "utils/api-client";

export default function Dashboard() {
  const router = useRouter();
  const queryClient = new QueryClient();

  const {
    data: posts,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => client(`posts`).then((data) => data?.posts),
  });

  const deletePost = useMutation({
    mutationFn: ({ id }: { id: string }) => {
      return client(`posts/${id}`, { method: "DELETE" } as any);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  let user = false;
  React.useLayoutEffect(() => {
    if (!user || user === null) {
      router.push("/me");
    }
  }, [router, user]);

  return (
    <div className="flex flex-col max-w-4xl border-2 rounded-lg md:mx-auto my-20 mx-4 p-4">
      <div className="w-full flex flex-col md:flex-row justify-between gap-8 mb-8">
        <TotalPosts />
        <button className="border-2 rounded-lg self-start p-2">
          Log out
          <FaArrowRight className="inline ml-4" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-[80%] mx-auto my-12">
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}
