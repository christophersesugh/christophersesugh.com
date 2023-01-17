import React from "react";

export default function Blog() {
  return <div>index</div>;
}

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import AppHead from "components/app-head";
// import PostCard from "components/posts/components/post-card";
// import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
// import { db } from "config/firebase";
// import database from "utils/db";
// import { useAsync } from "utils/hooks/use-async";
// import LoadingIndicator from "components/loading-indicator";
// import { FaPlus } from "react-icons/fa";

// export default function Blog({ postsData }: any) {
//   const { run, data: posts, isSuccess, isLoading, isError, error } = useAsync();
//   const [postLimit, setPostLimit] = React.useState(9);
//   const router = useRouter();

//   React.useEffect(() => {
//     async function fetch() {
//       const posts = collection(db, "posts");
//       const q = query(posts, orderBy("title", "desc"), limit(postLimit));
//       const postsData = await getDocs(q);
//       const results = postsData.docs.map((post: any) => ({
//         id: post.id,
//         ...post.data(),
//       })) as any;
//       return results;
//     }
//     run(fetch());
//   }, [postLimit, run]);

//   return (
//     <>
//       <AppHead title="Blog | CAS" />
//       <div className="px-16 flex flex-col justify-center items-center gap-12 md:flex-row-reverse max-w-6xl mx-auto mt-12 mb-40">
//         <Image
//           src="/assets/blog.png"
//           alt="header image"
//           width={400}
//           height={600}
//         />
//         <div>
//           <h1 className="text-4xl leading-snug ">
//             Learn to develop quality software with awesome articles.
//             <p className="text-slate-400">
//               Find the latest of my writing below.
//             </p>
//           </h1>
//         </div>
//       </div>
//       <div className="my-40 mx-auto max-w-4xl flex flex-col">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-4 ">
//           {isSuccess ? (
//             <>
//               {posts.map((post: any) => (
//                 <div key={post.id}>
//                   <PostCard post={post} />
//                 </div>
//               ))}
//             </>
//           ) : null}
//           {isLoading || router.isFallback ? (
//             <LoadingIndicator path={router.asPath} />
//           ) : null}
//         </div>
//         <button
//           disabled={limit >= posts?.length}
//           onClick={() => setPostLimit((limit) => limit + 6)}
//           className="mt-20 rounded-3xl p-4 border-2 border-slate-400 dark:hover:border-white transition-all duration-300 hover:border-black self-center align-self-center"
//         >
//           Load more articles <FaPlus className="inline ml-6" />
//         </button>
//       </div>
//     </>
//   );
// }

// export const getStaticProps = async () => {
//   const posts = await database
//     .collection("posts")
//     .orderBy("createdAt", "desc")
//     .limit(1)
//     .get();
//   const postsData = posts.docs.map((post) => ({
//     id: post.id,
//     ...post.data(),
//   }));
//   return {
//     props: { postsData },
//     revalidate: 10,
//   };
// };
