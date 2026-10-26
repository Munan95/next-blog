import Link from "next/link";
import { FacebookIcon } from "./ui/SocialIcons";
import { TwitterIcon } from "./ui/SocialIcons";
import { GithubIcon } from "./ui/SocialIcons";
import { LinkedinIcon } from "./ui/SocialIcons";

const Footer = ()=>{
    return(
        <div className="flex flex-col h-35 w-full bg-sky-800 pt-4 text-white text-sm">
            
            <div className="flex flex-row justify-center items-center gap-55 w-full">

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
            
            <div className="flex justify-center items-center gap-200 bg-sky-800 pt-4 pb-1 text-white text-sm">
                <div className="flex flex-row justify-center items-center gap-3">
                    
                    <Link
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className=""
                    >
                        <FacebookIcon className="h-4 w-4 text-slate-950" />
                    </Link>
                    
                    <Link
                        href="https://x.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X (Twitter)"
                        className=""
                    >
                        <TwitterIcon className="h-4 w-4 text-slate-950" />
                    </Link>

                    <Link
                        href="https://github.com/Munan95"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Github"
                        className=""
                    >
                        <GithubIcon className="h-4 w-4 text-slate-950" />
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/md-morshed-khan-munan-1390863b0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Linkedin"
                        className=""
                    >
                        <LinkedinIcon className="h-4 w-4 text-slate-950" />
                    </Link>
                    
                </div>

                <div className="flex gap-3">

                    <Link
                        href="/terms"
                        className="hover:text-gray-200 hover:underline">
                        Terms
                    </Link>

                    <Link
                        href="/policy"
                        className="hover:text-gray-200 hover:underline">
                        Privacy Policy
                    </Link>

                    <Link
                        href="/gdrp"
                        className="hover:text-gray-200 hover:underline">
                        GDPR
                    </Link>

                </div>
            </div>

            <div className="bg-white/40 rounded-full h-px mx-72 my-1"></div>

            <div className="flex justify-center items-center pt-1"><p><span>&copy; 2014-2026 </span><span className="text-rose-500">Next</span><span>blog · Made with </span><span className="text-rose-500 text-base"> ♥ </span><span> in Jhalokati, Bangladesh.</span></p></div>

            <div className="flex justify-center items-center">
                <p><span className="text-rose-500">Next</span><span>Blog® - All rights reserved!</span></p>
            </div>
            
        </div>
    );
};

export default Footer;