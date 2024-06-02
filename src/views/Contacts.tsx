import React from "react";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import SocialIcons from "@/components/pages/SocialIcons";

const Contacts: React.FC = () => {
  useDocumentTitle("Contacts");
  return (
    <section className="h-full">
      <div className="flex flex-col h-full max-w-screen-xl p-3 mx-auto md:flex-row md:justify-between">
        {/* left-contacts */}
        <ContactInfo />

        {/* right-form */}
        <ContactForm />
      </div>
    </section>
  );
};

const ContactInfo: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-full p-3 animate-fade-right animate-once animate-duration-700 animate-ease-in-out lg:w-3/5">
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
};

const ContactForm: React.FC = () => {
  return (
    <div className="grid py-3 animate-fade-left animate-once animate-duration-700 animate-ease-in-out place-items-center lg:w-2/5">
      <Card className="bg-muted ring-2 ring-primary">
        <CardHeader className="border-b-2 border-gray-400">
          <CardTitle className="tracking-wider uppercase">
            Got a question for me?
          </CardTitle>
          <CardDescription>
            Fill up the form and I will get back to you{" "}
            <span className="font-semibold text-primary">ASAP!</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="py-3 space-y-3">
          <div>
            <Label htmlFor="fullname">
              Fullname <span className="text-red-400">*</span>
            </Label>
            <Input id="fullname" placeholder="Full name" />
          </div>
          <div>
            <Label htmlFor="email">
              Email <span className="text-red-400">*</span>
            </Label>
            <Input id="email" placeholder="Email address" />
          </div>
          <div>
            <Label htmlFor="message">
              Message <span className="text-red-400">*</span>
            </Label>
            <Textarea
              className="resize-none"
              rows={8}
              id="message"
              placeholder="Message..."
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Send Message</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Contacts;
