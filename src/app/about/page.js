import Link from "next/link";

const About = ()=>{
    return(
        <div className="flex flex-col items-center justify-center h-screen w-full">
            <p>This is About page</p>
            <Link
                href="/about/experience"
                className="text-base hover:underline">
                Experience
            </Link>
        </div>
    );
};

export default About;