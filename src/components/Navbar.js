import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const Navbar = () => {
    return (
        <div className="flex w-full h-20 px-10 items-center bg-green-400 dev-border">
            <div className="flex w-full items-center justify-between">

                <Link
                    href="/"
                    className="font-bold text-2xl">
                    Next-blog
                </Link>

                <div className="flex items-center gap-4">

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
        </div>
    );
};

export default Navbar;