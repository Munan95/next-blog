import ContactCard from "@/components/ui/ContactCard";

const Contact = ()=>{
    return(
        <div className="flex items-center justify-center min-h-screen w-full bg-rose-100/10 p-4 sm:p-10">
            <ContactCard docsUrl="/docs" agentUrl="/agent" />
        </div>
    );
};

export default Contact;

export const metadata = {
  title: "Contact",
  description: "All contact details here",
};  