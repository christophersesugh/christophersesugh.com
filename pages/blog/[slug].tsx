import React from "react";

export default function Post() {
  return <div>[slug]</div>;
}

// import React from "react";
// import AppHead from "components/app-head";
// import { useRouter } from "next/router";
// import db from "utils/db";
// import LoadingIndicator from "components/loading-indicator";
// import Markdown from "components/markdown";
// import Image from "next/image";
// import { readingTime } from "reading-time-estimator";
// import { BsArrowLeft } from "react-icons/bs";
// import Link from "next/link";

// export default function Post({ post }: any) {
//   const router = useRouter();

//   if (router.isFallback) {
//     return <LoadingIndicator path="/blog" />;
//   }

//   const result = readingTime(post.body, 238, "en");

//   return (
//     <div className="my-20 max-w-2xl mx-8 md:mx-auto">
//       <AppHead title={`${post.title} | CAS`} />
//       <div className="my-20">
//         <Link href="/blog">
//           <button className="text-xl text-bold">
//             <BsArrowLeft className="inline mr-4 text-2xl font-extrabold" /> Back
//             to review
//           </button>
//         </Link>
//       </div>
//       {post ? (
//         <div>
//           <div className="max-w-2xl mx-4 md:mx-auto flex flex-col justify-center">
//             <h1 className="text-4xl font-extrabold capitalize">{post.title}</h1>
//             <h2 className="text-xl text-slate-400 mt-4 mb-12">
//               {post.createdAt.substring(0, post.createdAt.length - 13)} --{" "}
//               {result.text}
//             </h2>
//             <div className="block w-full relative h-auto">
//               <Image
//                 // fill
//                 width={300}
//                 height={300}
//                 src={post.image}
//                 alt={post.title}
//                 className="rounded block relative w-full mb-12"
//               />
//             </div>
//             <div>
//               <Markdown code={post.body} />
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p> no post found</p>
//       )}
//     </div>
//   );
// }

// export const getStaticPaths = async () => {
//   const posts = await db.collection("posts").get();
//   const paths = posts.docs.map((post) => ({
//     params: {
//       slug: post.data().slug,
//     },
//   }));
//   return {
//     paths,
//     fallback: "blocking",
//   };
// };

// export const getStaticProps = async (context: any) => {
//   const { slug } = context.params;
//   const posts = await db.collection("posts").where("slug", "==", slug).get();
//   const post = posts.docs.map((post) => post.data());
//   if (post.length) {
//     return {
//       props: {
//         post: post[0],
//       },
//     };
//   } else {
//     return {
//       props: {},
//     };
//   }
// };
