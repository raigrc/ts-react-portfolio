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
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contacts: React.FC = () => {
  useDocumentTitle("Contacts");
  return (
    <section className="h-full">
      <div className="flex flex-col h-full max-w-screen-xl p-3 mx-auto md:flex-row md:justify-between">
        {/* left-contacts */}
        <div className="flex flex-col justify-center h-full p-3 lg:w-3/5">
          <div className="">
            <h1 className="text-4xl font-bold leading-relaxed tracking-widest uppercase md:text-5xl lg:text-6xl ">
              Contact
            </h1>
            <h2 className="text-xl tracking-wider md:text-2xl lg:text-3xl">Let's work together</h2>
          </div>

          <div className="py-6 space-y-3">
            <div className="flex items-center tracking-wider">
              <IoMdMail className="p-2 mr-3 rounded-full size-10 bg-accent fill-primary" />
              <p>ravenjstn.grc@gmail.com</p>
            </div>
            <div className="flex items-center">
              <FaPhone className="p-2 mr-3 rounded-full size-10 bg-accent fill-primary" />
              <p>+63 961 1458 131</p>
            </div>
          </div>

          {/* socials */}
          <div className="py-6">
            <h1 className="text-xl leading-loose tracking-wider">My Socials</h1>
            <div className="flex items-center gap-6">
              <Link to="https://www.linkedin.com/in/raigrc/" target="blank">
                <FaLinkedin className="transition duration-300 size-8 fill-primary hover:fill-primary/70" />
              </Link>
              <Link to="https://github.com/raigrc" target="blank">
                <FaGithub className="transition duration-300 size-8 fill-primary hover:fill-primary/70" />
              </Link>
              <Link to="https://www.facebook.com/xrai1210" target="blank">
                <FaFacebook className="transition duration-300 size-8 fill-primary hover:fill-primary/70" />
              </Link>
              <Link to="https://www.instagram.com/rai.grc/" target="blank">
                <FaInstagram className="transition duration-300 size-8 fill-primary hover:fill-primary/70" />
              </Link>
            </div>
          </div>
        </div>

        {/* right-form */}
        <div className="grid py-3 lg:w-2/5 place-items-center">
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
      </div>
    </section>
  );
};

export default Contacts;
