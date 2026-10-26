export const instant = false;
// /blogs/[slug]: one post's full article, addressed by its title slug.
import { getPost, getPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export function generateStaticParams() {
    return getPosts().map((post) => ({ slug: post.slug }));
}

// Generate metadata dynamically for each blog post
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = getPost(slug);

    if (!post || post.status !== "published") {
        return {
            title: "Blog Not Found",
            description: "The requested blog post could not be found.",
        };
    }

    return {
        title: post.title,
        description: post.excerpt || "Full details of blog post",
    };
}

const BlogPost = async ({ params }) => {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post || post.status !== "published") notFound();

    return (
        <article className="mx-auto w-full max-w-3xl px-6 py-10 bg-slate-100/10">
            <img
                src={post.coverImage}
                alt={post.title}
                className="mb-8 aspect-video w-full rounded-xl object-cover"
            />
            <p className="text-sm text-muted-foreground">
                {post.category} · {post.readTime} min read
            </p>
            <h1 className="mt-2 text-4xl font-bold">{post.title}</h1>
            <p className="mt-4 text-sm text-muted-foreground">
                By {post.author.name} on{" "}
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                    dateStyle: "long",
                })}
            </p>

            <div className="prose prose-neutral mt-8 max-w-none dark:prose-invert">
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            <ul className="mt-10 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                    <li
                        key={tag}
                        className="rounded-full border px-3 py-1 text-xs text-muted-foreground"
                    >
                        #{tag}
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default BlogPost;