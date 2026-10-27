import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const Navbar = () => {
    return (
        <div className="flex w-full h-20 pl-60 pr-7 items-center bg-sky-900 justify-between text-white">

                <Link
                    href="/"
                    className={`${roboto.className} italic font-bold`}>
                    <p><span className="text-rose-700 text-4xl">Next</span><span className="text-3xl">Blog</span><span>.com</span></p>
                </Link>

                <div className="flex items-center gap-5">

                    <Link
                        href="/"
                        className="text-base hover:text-gray-300 hover:underline">
                        Home
                    </Link>

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