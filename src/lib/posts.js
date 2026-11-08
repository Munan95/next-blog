import { cache } from "react";
import { ObjectId } from "mongodb";
import { connection } from "next/server";
import client from "@/lib/mongodb";

const posts = () => client.db("blog").collection("post");

export const getPublishedPosts = cache(async () => {
    await connection();
    return posts()
        .find({ status: "published" })
        .sort({ createdAt: -1 })
        .toArray();
});

export const getPost = cache(async (id) => {
    await connection();
    if (!ObjectId.isValid(id)) return null;

    const post = await posts().findOne({ _id: new ObjectId(id) });
    return post?.status === "published" ? post : null;
});

export const getLatestPosts = cache(async (limit) => {
    await connection();
    return posts()
        .find({ status: "published" })
        .sort({ createdAt: -1 })
        .limit(limit)
        .toArray();
});