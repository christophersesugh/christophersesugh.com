import { NextApiRequest, NextApiResponse } from "next";
import db from "utils/db";

const singlePostHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query as any;

  try {
    if (req.method === "PUT") {
      await db
        .collection("posts")
        .doc(id)
        .update({
          ...req.body,
          updatedAt: new Date().toUTCString(),
        });
    } else if (req.method === "GET") {
      const doc = await db.collection("posts").doc(id).get();
      if (!doc.exists) {
        return res.status(404).send(`No post with the given id ${id}`);
      } else {
        return res.status(200).json({ post: doc.data() });
      }
    } else if (req.method === "DELETE") {
      await db.collection("posts").doc(id).delete();
    }
    res.status(200).send("Action success");
  } catch (error: any) {
    res.status(400).json({ message: error?.message });
  }
};

export default singlePostHandler;
