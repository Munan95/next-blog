import Link from "next/link";

const About = ()=>{
    return(
        <div className="flex flex-col items-center justify-center h-screen w-full">
            <p>This is About page</p>
            <Link
                href="/about/experience"
                className="text-base my-4 p-2 rounded-lg bg-purple-900 hover:bg-purple-950 text-white">
                Experience
            </Link>
        </div>
    );
};

export default About;