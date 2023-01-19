import React from "react";
import { Loading } from "./loading-indicator";
import { PostCard } from "./post-card";

export function BlogCards({ postsData, queried }: any) {
  const { data: posts, error, isError, isLoading, isSuccess } = postsData;
  return (
    <>
      {/* error ui */}
      {isError ? (
        <div className="text-center">
          <p className="text-xl">There was an error</p>
          <pre className="text-lg text-red-500">{error.meesage}</pre>
        </div>
      ) : null}

      {/* loading ui */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 ">
        {/* query ui */}

        {isLoading
          ? Array(6)
              .fill(null)
              .map((_, index) => <Loading key={`loading-${index}`} />)
          : null}

        {/* success ui */}
        {isSuccess ? (
          <>
            {isSuccess ? (
              posts.length ? (
                posts.map((post: any) => (
                  <div key={post.id}>
                    <PostCard post={post} />
                  </div>
                ))
              ) : (
                <h3 className="text-center text-lg">
                  No posts found. Try another search.
                </h3>
              )
            ) : null}
          </>
        ) : null}
      </div>
    </>
  );
}
