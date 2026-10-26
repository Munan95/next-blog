import ContactCard from "@/components/ui/ContactCard";
import TeamCard from "@/components/ui/TeamCard";
import team from "@/data/team.json";

const Contact = ()=>{
    return(
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-rose-100/10 p-4 sm:p-10">

            <div className="w-full"><ContactCard docsUrl="/docs" agentUrl="/agent" /></div>

            <div className="flex flex-col items-center justify-center pt-23 font-bold text-sm text-slate-700">
                <div>
                    Our support team works 24/7 to help you.
                </div>

                <div>
                    If you would like to contact one of the co-founders directly, please use the contacts below.
                </div>
            </div>

            <div className="grid gap-6 px-6 pt-4 pb-4 sm:grid-cols-2">
                {team.map((member) => (
                    <TeamCard key={member.email} {...member} />
                ))}
            </div>

        </div>
    );
};

export default Contact;

export const metadata = {
  title: "Contact",
  description: "All contact details here",
};  