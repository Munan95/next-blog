import Link from "next/link";

const Footer = ()=>{
    return(
        <div className="flex justify-center items-center gap-160 h-20 w-full bg-sky-800 py-4 text-white text-sm">
            
            <div>
                <p><span>Copyright &copy; </span><span className="text-rose-500">Next</span><span>Blog - All rights reserved!</span></p>
            </div>

            <div className="flex gap-3">

                <Link
                    href="/blogs"
                    className="hover:text-gray-200 hover:underline">
                    Blogs
                </Link>

                <Link
                    href="/about"
                    className="hover:text-gray-200 hover:underline">
                    About
                </Link>

                <Link
                    href="/services"
                    className="hover:text-gray-200 hover:underline">
                    Services
                </Link>

                <Link
                    href="/contact"
                    className="hover:text-gray-200 hover:underline">
                    Contact
                </Link>

                <Link
                    href="/review"
                    className="hover:text-gray-200 hover:underline">
                    Review
                </Link>
            </div>
            
        </div>
    );
};

export default Footer;