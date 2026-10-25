import Link from "next/link";

const Footer = ()=>{
    return(
        <div className="flex justify-center items-center gap-120 h-20 w-full bg-sky-800 py-4 text-white text-sm">
            
            <div>
                <p className="flex">Copyright ©NextBlog | All rights reserved</p>
            </div>

            <div className="flex gap-3">

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
                    href="/service"
                    className="text-base hover:text-gray-300 hover:underline">
                    Service
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
            </div>
            
        </div>
    );
};

export default Footer;