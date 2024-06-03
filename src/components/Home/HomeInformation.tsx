import SocialIcons from "@/shared/components/SocialIcons";
import { Link } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Button } from "../ui/button";

import Resume from "/home/RavenJustinPGarcia_Resume.pdf";

const HomeInformation = () => {
  const [Typewriter] = useTypewriter({
    words: ["React Developer", "Front-end Developer", "Web Developer"],
    loop: 0,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });
  return (
    <div className="z-50 flex flex-col items-center justify-center h-full tracking-wider lg:w-1/2 lg:items-start">
      <h3 className="text-sm animate-fade-down animate-duration-700 animate-once animate-ease-in-out md:text-base lg:text-lg">
        Hello, <span className="text-primary">I'm</span>
      </h3>
      <h1 className="text-2xl font-semibold animate-fade-down animate-delay-300 animate-duration-700 animate-once animate-ease-in-out md:text-3xl lg:text-5xl">
        Raven Justin P. Garcia
      </h1>
      <h2 className="text-lg font-bold animate-fade-down text-primary animate-delay-500 animate-duration-700 animate-once animate-ease-in-out md:text-xl lg:text-4xl">
        {Typewriter}
        <Cursor />
      </h2>

      <div className="flex items-center justify-center gap-3 py-10 animate-fade-right animate-delay-700 animate-duration-700 animate-once animate-ease-in-out lg:justify-normal">
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
