import BlogCard from "@/components/BlogCard";

const Blogs = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <p>There have some blogs</p>
            <div className="flex flex-row justify-center items-center gap-3 w-full">
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    );
};

export default Blogs;