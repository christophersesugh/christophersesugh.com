import { client } from "./api-client";

async function getPosts() {
  const data = await client("posts");
  return data;
}

export { getPosts };
