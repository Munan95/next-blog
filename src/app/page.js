import BlogCard from "@/components/BlogCard";
import { getPosts } from "@/lib/posts";

const Blogs = () => {
    const posts = getPosts();
    return (
        <div className="min-h-screen w-full bg-rose-100/10">

            <div className="flex flex-col justify-center items-center m-18 text-slate-800">
              
              <p className="text-bold bg-slate-50 p-2 rounded-2xl">Blog</p>

              <p className="font-bold text-4xl m-4">Discover our latest news</p>

              <p className="">Discover the achievments that set us apart.From groundbreaking projects to industry accolades,we take pride in our accomplisments,</p>
              <p className="">we take pride in our accomplisments.</p>
            
            </div>

            <div className="mx-auto w-full max-w-6xl px-6 py-10">

                <p className="mb-8 text-3xl font-bold ">EDITOR'S PICKS</p>

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

export default Blogs;