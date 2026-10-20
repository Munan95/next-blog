import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BlogCard = ({ post }) => {
  const {
    title,
    slug,
    excerpt,
    coverImage,
    category,
    readTime,
    featured,
  } = post;

  return (
    <Card className="group flex h-full flex-col gap-0 overflow-hidden border border-slate-200 bg-white py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl">
      {/* Cover image */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={coverImage}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {featured && (
          <Badge
            className="absolute left-3 top-3 z-10"
            variant="secondary"
          >
            Featured
          </Badge>
        )}
      </div>

      {/* Card content */}
      <CardHeader className="flex-1 gap-3 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
            {category}
          </span>
          <span aria-hidden="true">·</span>
          <span>{readTime} min read</span>
        </div>

        <CardTitle className="line-clamp-2 text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-slate-700 sm:text-xl">
          {title}
        </CardTitle>

        <CardDescription className="line-clamp-3 text-sm leading-6 text-slate-600">
          {excerpt}
        </CardDescription>
      </CardHeader>

      {/* Read more link */}
      <CardFooter className="mt-auto border-t border-slate-100 p-5 sm:px-6">
        <Link
          href={`/blogs/${slug}`}
          className="inline-flex items-center gap-2 font-semibold text-slate-800 transition-colors hover:text-slate-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-700"
        >
          Read More
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;