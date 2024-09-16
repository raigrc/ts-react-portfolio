import SocialIcons from "@/shared/components/SocialIcons";
import { Link } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Button } from "../ui/button";

import Resume from "/home/RavenJustinPGarcia_Resume.pdf";

const HomeInformation = () => {
  const [Typewriter] = useTypewriter({
    words: [
      "React Developer",
      "Front-end Developer",
      "Web Developer",
      "Full-stack Developer",
      "Next JS Developer",
    ],
    loop: 0,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });
  return (
    <div className="z-50 flex h-full flex-col items-center justify-center tracking-wider lg:w-1/2 lg:items-start">
      <h3 className="animate-fade-down text-sm animate-duration-700 animate-once animate-ease-in-out md:text-base lg:text-lg">
        Hello, <span className="text-primary">I'm</span>
      </h3>
      <h1 className="animate-fade-down text-2xl font-semibold animate-delay-300 animate-duration-700 animate-once animate-ease-in-out md:text-3xl lg:text-5xl">
        Raven Justin P. Garcia
      </h1>
      <h2 className="animate-fade-down text-lg font-bold text-primary animate-delay-500 animate-duration-700 animate-once animate-ease-in-out md:text-xl lg:text-4xl">
        {Typewriter}
        <Cursor />
      </h2>

      <div className="flex animate-fade-right items-center justify-center gap-3 py-10 animate-delay-700 animate-duration-700 animate-once animate-ease-in-out lg:justify-normal">
        <a href={Resume} download target="_blank" rel="noopener noreferrer">
          <Button variant="outline">Download CV</Button>
        </a>

        <Link to="/contacts">
          <Button>Contact Me!</Button>
        </Link>
      </div>

      <SocialIcons className="animate-fade-right animate-delay-1000 animate-duration-700 animate-once animate-ease-in-out" />
    </div>
  );
};

export default HomeInformation;
