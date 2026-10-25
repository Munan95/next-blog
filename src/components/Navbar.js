import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const Navbar = () => {
    return (
        <div className="flex w-full h-20 pl-60 pr-7 items-center bg-sky-900 justify-between text-white">

                <Link
                    href="/"
                    className="font-bold text-2xl">
                    <img src="/text.gif" width={150} alt="Gif" />
                </Link>

                <div className="flex items-center gap-5">

                    <Link
                        href="/blogs"
                        className="text-base hover:text-gray-300 hover:underline">
                        Blogs
                    </Link>

                    <Link
                        href="/about"
                        className="text-base hover:text-gray-300 hover:underline">
                        About
                    </Link>


                    <Link
                        href="/services"
                        className="text-base hover:text-gray-300 hover:underline">
                        Services
                    </Link>

                    <Link
                        href="/contact"
                        className="text-base hover:text-gray-300 hover:underline">
                        Contact
                    </Link>

                    <Link
                        href="/review"
                        className="text-base hover:text-gray-300 hover:underline">
                        Review
                    </Link>

                    <Field orientation="horizontal">
                        <Input type="search" placeholder="Search..." />
                        <Button className="bg-gray-800 hover:bg-gray-900 text-white">Search</Button>
                    </Field>

                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>

            </div>
    );
};

export default Navbar;