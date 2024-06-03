import SocialIcons from "@/shared/components/SocialIcons";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";


const ContactInformation = () => {
  return (
    <div className="flex flex-col justify-center h-full p-3 animate-fade-right animate-duration-700 animate-once animate-ease-in-out lg:w-3/5">
      <div className="">
        <h1 className="text-4xl font-bold leading-relaxed tracking-widest uppercase md:text-5xl lg:text-6xl ">
          Contact
        </h1>
        <h2 className="text-xl tracking-wider md:text-2xl lg:text-3xl">
          Let's work together
        </h2>
      </div>

      <div className="py-6 space-y-3">
        <div className="flex items-center tracking-wider">
          <IoMdMail className="p-2 mr-3 rounded-full size-10 bg-accent fill-primary" />
          <p>ravenjstn.grc@gmail.com</p>
        </div>
        <div className="flex items-center">
          <FaPhone className="p-2 mr-3 rounded-full size-10 bg-accent fill-primary" />
          <p>+63 9611458131</p>
        </div>
      </div>

      {/* socials */}
      <div className="py-6">
        <h1 className="text-xl leading-loose tracking-wider">My Socials</h1>
        <SocialIcons />
      </div>
    </div>
  );
}

export default ContactInformation