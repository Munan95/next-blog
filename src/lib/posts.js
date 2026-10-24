import posts from "@/data/post.json";

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