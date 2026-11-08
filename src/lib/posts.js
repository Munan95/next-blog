import { cache } from "react";
import { ObjectId } from "mongodb";
import client from "./mongodb";

const posts = () => client.db("blog").collection("post");

export const getPublishedPosts = cache(() =>
  posts().find({ status: "published" }).sort({ createdAt: -1 }).toArray()
);

export const getPost = cache(async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const post = await posts().findOne({ _id: new ObjectId(id) });
  return post?.status === "published" ? post : null;
});