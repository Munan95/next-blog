import articles from "@/data/article.json";

/** All published articles, newest first. */
export function getArticles() {
    return articles
        .filter((article) => article.status === "published")
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

/** One published article by slug, or undefined. */
export function getArticle(slug) {
    return getArticles().find((article) => article.slug === slug);
}