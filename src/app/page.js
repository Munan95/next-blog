import ArticleCard from "@/components/ArticleCard";
import { getArticles } from "@/lib/article";

const Articles = () => {
    const articles = getArticles();
    return (
        <div className="min-h-screen w-full bg-rose-100/10">

            <div className="flex flex-col justify-center items-center m-18 text-slate-800">
              
              <p className="bg-slate-50 p-2 rounded-2xl">Blog</p>

              <p className="font-bold text-4xl m-4">Discover our latest news</p>

              <p className="text-base">Discover the achievments that set us apart.From groundbreaking projects to industry accolades,we take pride in our accomplisments,</p>
              <p className="text-base">we take pride in our accomplisments.</p>
            
            </div>

            <div className="mx-auto w-full max-w-6xl px-6 py-10">

                <p className="mb-8 text-3xl font-bold ">EDITOR'S PICKS</p>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <ArticleCard
                            key={article._id}
                            article={article}
                        />
                    ))}
                </div>

            </div>

        </div>
    );
};

export default Articles;