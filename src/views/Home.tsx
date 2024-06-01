import React from "react";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CodeReview from "/home/code_review.svg";
import Resume from "/home/RavenJustinPGarcia_Resume.pdf";

import SVGImage from "@/components/pages/SVGImage";
import SocialIcons from "@/components/pages/SocialIcons";

const Home: React.FC = () => {
  useDocumentTitle("Home");

  return (
    <section className="h-full">
      <div className="mx-auto flex h-full max-w-screen-xl flex-col px-3 py-3 lg:flex-row">
        <HomeInformation />
        <SVGImage img={CodeReview} />
      </div>
    </section>
  );
};

const HomeInformation: React.FC = () => {
  const [Typewriter] = useTypewriter({
    words: ["React Developer", "Front-end Developer", "Web Developer"],
    loop: 0,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });
  return (
    <div className="z-50 flex h-full flex-col items-center justify-center tracking-wider lg:w-1/2 lg:items-start">
      <h3 className="text-sm md:text-base lg:text-lg">
        Hello, <span className="text-primary">I'm</span>
      </h3>
      <h1 className="text-2xl font-semibold md:text-3xl lg:text-5xl">
        Raven Justin P. Garcia
      </h1>
      <h2 className="text-lg font-bold text-primary md:text-xl lg:text-4xl">
        {Typewriter}
        <Cursor />
      </h2>

      <div className="flex items-center justify-center gap-3 py-10 lg:justify-normal">
        <a href={Resume} download target="_blank" rel="noopener noreferrer">
          <Button variant="outline">Download CV</Button>
        </a>

        <Link to="/contacts">
          <Button>Contact Me!</Button>
        </Link>
      </div>

      <SocialIcons />
    </div>
  );
};

export default Home;
