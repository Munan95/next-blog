import { Suspense } from "react";
import BlogCard from "@/components/BlogCard";
import { getPublishedPosts } from "@/lib/posts";

async function BlogList() {
    const posts = await getPublishedPosts();

    return (
        <div className="min-h-screen w-full bg-rose-100/10">

            <div className="mx-auto w-full max-w-6xl px-6 pt-20 pb-15">

                <p className="mb-8 text-3xl font-bold ">Blogs</p>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <BlogCard
                            key={post._id}
                            post={post}
                        />
                    ))}
                </div>

            </div>

        </div>
    );
};

const Blogs = () => {
    return (
        <Suspense fallback={<p>Loading posts…</p>}>
            <BlogList />
        </Suspense>
    );
};

export default Blogs;

export const metadata = {
  title: "Blogs",
  description: "All blog post here",
};