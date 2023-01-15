import { db } from "config/firebase";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import React from "react";
import { useAsync } from "utils/hooks/use-async";

export default function Posts() {
  const { run, data: posts } = useAsync();

  const fetchPosts = async () => {
    const posts = collection(db, "posts");
    const q = query(posts, orderBy("createdAt"), limit(3));
    const postsData = await getDocs(q);
    const fetchedPosts = postsData.docs.map(
      (post: { id: any; data: () => any }) => ({
        id: post.id,
        ...post.data(),
      })
    );
    return fetchedPosts;
  };

  React.useEffect(() => {
    run(fetchPosts());
  }, [run]);

  console.log(posts);

  return <section className="mb-20">posts</section>;
}
