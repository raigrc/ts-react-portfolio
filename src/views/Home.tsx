import React from "react";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CodeReview from "/home/code_review.svg";
import Resume from "/home/RavenJustinPGarcia_Resume.pdf";

import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Home: React.FC = () => {
  useDocumentTitle("Home");

  const [Typewriter] = useTypewriter({
    words: ["React Developer", "Front-end Developer", "Web Developer"],
    loop: 0,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });
  return (
    <section className="h-full">
      <div className="flex h-full max-w-screen-xl py-3 mx-auto">
        {/* left text */}
        <div className="flex flex-col justify-center w-1/2 tracking-wider">
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

        {/* right img */}
        <div className="flex flex-col items-center justify-center w-1/2">
          <img src={CodeReview} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
