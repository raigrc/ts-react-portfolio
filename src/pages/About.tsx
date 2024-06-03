import useDocumentTitle from "@/hooks/useDocumentTitle";
import AboutInformation from "@/components/About/AboutInformation";
import Avatar from "@/components/About/Avatar";

const About = () => {
  useDocumentTitle("About Me");
  return (
    <section className="h-full">
      <div className="mx-auto flex h-full max-w-screen-xl flex-col-reverse items-center justify-between lg:flex-row lg:space-x-3">
        <AboutInformation />
        <Avatar />
      </div>
    </section>
  );
};

export default About;
