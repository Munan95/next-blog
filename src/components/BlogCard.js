import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const BlogCard = ({ post }) => {
    const { title, slug, excerpt, coverImage, category, readTime, featured } = post;

    return (
        <div className="flex dev-border">
            <Card className="relative mx-auto w-90 h-100 pt-0">
                <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                <img
                    src={coverImage}
                    alt={title}
                    className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                />
                <CardHeader>
                    <CardAction>
                        {featured && <Badge variant="secondary">Featured</Badge>}
                    </CardAction>
                    <p className="text-xs text-muted-foreground">
                        {category} · {readTime} min read
                    </p>
                    <CardTitle className="font-bold">{title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                        {excerpt}
                    </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                    <Link
                        href={`/blogs/${slug}`}
                        className="flex w-full items-center justify-center font-bold hover:underline"
                    >
                        Read More
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
};

export default BlogCard;