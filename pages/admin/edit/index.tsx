import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import AppHead from "components/app-head";
import { useAsync } from "utils/hooks/use-async";
import Link from "next/link";
import LoadingIndicator from "components/loading-indicator";

export default function Edit() {
  const { run, isSuccess, isLoading } = useAsync();
  const router = useRouter();
  async function fetch(endpoint: any) {
    return await run(axios.get(endpoint));
  }

  const posts = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetch("/api/posts"),
  });

  return (
    <>
      <AppHead title="Edit Post | CSA" />
      <h1>Entries</h1>
      {isSuccess ? (
        <>
          {posts?.data?.data?.posts.map((post: any) => (
            <div key={post.id}>
              <Link href={`/admin/edit/${post.id}`}>
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
