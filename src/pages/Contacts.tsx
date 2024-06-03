import useDocumentTitle from "@/hooks/useDocumentTitle";
import ContactInformation from "@/components/Contacts/ContactInformation";
import ContactForm from "@/components/Contacts/ContactForm";

const Contacts = () => {
  useDocumentTitle("Contacts");
  return (
    <section className="h-full">
      <div className="flex flex-col h-full max-w-screen-xl p-3 mx-auto md:flex-row md:justify-between">
        <ContactInformation />

        <ContactForm />
      </div>
    </section>
  );
};

export default Contacts;
