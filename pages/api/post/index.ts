import { NextApiRequest, NextApiResponse } from "next";
import db from "utils/db";

const createPost = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { slug } = req.body;
    const posts = await db.collection("posts").get();
    const postData = posts.docs.map((post) => post.data());

    if (postData.some((post) => post.slug === slug)) {
      return res.status(400).json({ message: "Post already exist" });
    } else {
      const { id } = await db.collection("posts").add({
        ...req.body,
        createdAt: new Date().toUTCString(),
      });
      res.status(200).json({ postId: id });
    }
  } catch (error: any) {
    res.status(400).json({ message: "Post with given title already exist." });
  }
};

export default createPost;
