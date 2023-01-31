import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "context/auth-context";
import { PostCard, TotalPosts } from "components/admin";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import { useQuery } from "react-query";
import { client } from "utils/api-client";
import Link from "next/link";
import AppHead from "components/app-head";

export default function Dashboard() {
  const [query, setQuery] = React.useState("");
  const [limit, setLimit] = React.useState(8);
  const router = useRouter();
  const { user, logout } = useAuth();

  const {
    data: posts,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["posts", { limit, query }],
    queryFn: () =>
      client(`posts?title=${query}&limit=${limit}`).then((data) => data.posts),
  });

  React.useLayoutEffect(() => {
    if (!user || user === null) {
      router.push("/login");
    }
  }, [router, user]);

  return (
    <>
      <AppHead pageTitle={`Dashboard | CAS`} />

      <div className="flex flex-col max-w-4xl border-2 rounded-lg items-center my-20 mx-4 p-4 md:mx-auto">
        <TotalPosts posts={posts} isSuccess={isSuccess} />
        <div className="flex gap-4 my-10">
          <Link href="/admin/post">
            <button className="border-2 rounded-lg self-start p-2">
              Add post
              <FaPlus className="inline ml-4" />
            </button>
          </Link>
          <Link href="/me">
            <button className="border-2 rounded-lg self-start p-2">
              Profile
            </button>
          </Link>
          <button
            onClick={logout}
            className="border-2 rounded-lg self-start p-2"
          >
            Log out
            <FaArrowRight className="inline ml-4" />
          </button>
        </div>
        <form className="w-full md:w-[50%] my-10 ">
          <label htmlFor="search">
            <input
              minLength={3}
              value={query}
              type="search"
              name="search"
              id="search"
              placeholder="Search posts"
              onChange={(e) => setQuery(e.currentTarget.value)}
              className="w-full border-slate-500 border-2 rounded-xl dark:border-slate-200 dark:text-slate-500 p-4 text-lg focus:outline-none"
            />
          </label>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-[80%] mx-auto my-12">
          {isLoading ? <p className="text-6xl">Loading...</p> : null}
          {isSuccess ? (
            posts?.length ? (
              <>
                {posts.map((post: any) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </>
            ) : (
              <p className="text-xl">No posts</p>
            )
          ) : null}
        </div>
        <button
          className="border-2 rounded-lg p-2"
          onClick={() => setLimit((limit) => limit + 8)}
        >
          Load more posts
          <FaPlus className="inline ml-4" />
        </button>
      </div>
    </>
  );
}
