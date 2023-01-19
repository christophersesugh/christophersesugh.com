import React from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import AppHead from "components/app-head";
import Link from "next/link";
import LoadingIndicator from "components/loading-indicator";
import { client } from "utils/api-client";

export default function Edit() {
  const {
    data: posts,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => client(`posts`).then((data) => data?.posts),
  });

  return (
    <>
      <AppHead title="Edit Post | CSA" />
      <h1>Entries</h1>
      {isSuccess ? (
        <>
          {posts?.map((post: any) => (
            <div key={post._id}>
              <Link href={`/admin/edit/${post._id}`}>
                <button>{post.title}</button>
              </Link>
              <br />
            </div>
          ))}
        </>
      ) : null}
      {isLoading ? <LoadingIndicator path="*" /> : null}
    </>
  );
}
