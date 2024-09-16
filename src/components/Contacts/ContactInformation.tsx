import SocialIcons from "@/shared/components/SocialIcons";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const ContactInformation = () => {
  return (
    <div className="flex h-full animate-fade-right flex-col justify-center p-3 animate-duration-700 animate-once animate-ease-in-out lg:w-3/5">
      <div className="">
        <h1 className="text-4xl font-bold uppercase leading-relaxed tracking-widest md:text-5xl lg:text-6xl ">
          Contact
        </h1>
        <h2 className="text-xl tracking-wider md:text-2xl lg:text-3xl">
          Let's work together
        </h2>
      </div>

      <div className="space-y-3 py-6">
        <div className="flex items-center tracking-wider">
          <IoMdMail className="mr-3 size-10 rounded-full bg-accent fill-primary p-2" />
          <p>ravenjstn.grc@gmail.com</p>
        </div>
        <div className="flex items-center">
          <FaPhone className="mr-3 size-10 rounded-full bg-accent fill-primary p-2" />
          <p>+63 994 691 6633</p>
        </div>
      </div>

      {/* socials */}
      <div className="py-6">
        <h1 className="text-xl leading-loose tracking-wider">My Socials</h1>
        <SocialIcons />
      </div>
    </div>
  );
};

export default ContactInformation;
