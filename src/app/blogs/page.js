export const instant = false;
import { MongoClient } from "mongodb";
import BlogCard from "@/components/BlogCard";

const db_uri = process.env.MONGODB_URI;
if(!db_uri){
    throw new error("MongoDb uri is not define int the environment variables");
}

const db_call = new MongoClient(db_uri);

async function BlogList() {
    const posts = await db_call
        .db("blog")
        .collection("post")
        .find({ })
        .sort({ createdAt:-1 })
        .toArray();

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
        <div>
            <BlogList />
        </div>
    );
};

export default Blogs;

export const metadata = {
  title: "Blogs",
  description: "All blog post here",
};