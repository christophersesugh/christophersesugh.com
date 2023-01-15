import { NextApiRequest, NextApiResponse } from "next";
import db from "utils/db";

const posts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const posts = await db.collection("posts").orderBy("createdAt").get();
    const postsData = posts.docs.map((post) => ({
      id: post.id,
      ...post.data(),
    }));
    res.status(200).json({ posts: postsData });
  } catch (error: any) {
    res.status(400).json({ message: error?.message });
  }
};

export default posts;
