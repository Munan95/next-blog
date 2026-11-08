export const instant = false;
import { MongoClient } from "mongodb";
import ArticleCard from "@/components/ArticleCard";

const db_uri = process.env.MONGODB_URI;
if(!db_uri){
    throw new error("MongoDb uri is not define int the environment variables");
}

const db_call = new MongoClient(db_uri);

async function ArticleList() {
    const articles = await db_call
        .db("blog")
        .collection("post")
        .find({ })
        .sort({ createdAt:-1 })
        .toArray();

    return (
        <div className="min-h-screen w-full bg-rose-100/10">

            <div className="flex flex-col justify-center items-center m-18 text-slate-800">
              
              <p className="bg-slate-100 p-2 rounded-2xl">Blog</p>

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

const Article = () => {
    return (
        <div>
            <ArticleList />
        </div>
    );
};

export default Article;