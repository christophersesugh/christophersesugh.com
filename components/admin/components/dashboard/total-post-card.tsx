import React from "react";

export function TotalPosts({ posts, isSuccess }: any) {
  return (
    <div className="w-full md:w-[50%] rounded-lg p-12 border-2 text-center">
      {isSuccess ? (
        <>
          <p className="text-6xl">{posts?.length} </p>
          <span>posts</span>
        </>
      ) : (
        <p>0 posts</p>
      )}
    </div>
  );
}
