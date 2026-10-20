import post1 from "@/data/posts/post-1.json";
import post2 from "@/data/posts/post-2.json";
import post3 from "@/data/posts/post-3.json";
import post4 from "@/data/posts/post-4.json";
import post5 from "@/data/posts/post-5.json";

const posts = [post1, post2, post3, post4, post5];

/** All published posts, newest first. */
export function getPosts() {
    return posts
        .filter((post) => post.status === "published")
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

/** One published post by slug, or undefined. */
export function getPost(slug) {
    return getPosts().find((post) => post.slug === slug);
}