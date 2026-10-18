import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const BlogCard = () => {
    return (
        <div className="flex dev-border">
            <Card className="relative mx-auto w-90 h-100 pt-0">
                <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                <img
                    src="https://avatar.vercel.sh/shadcn1"
                    alt="Event cover"
                    className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                />
                <CardHeader>
                    <CardAction>
                        <Badge variant="secondary">Featured</Badge>
                    </CardAction>
                    <CardTitle className="font-bold">Blog Tittle</CardTitle>
                    <CardDescription>
                        Blog description goes here.This is a brief summary of blog content to give readers 
                        an idea of what to expect when they click through to read more.
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <Link
                        href="/blogs/detailss"
                        className="flex items-center justify-center w-full font-bold hover:underline">
                        Read More
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
};

export default BlogCard;