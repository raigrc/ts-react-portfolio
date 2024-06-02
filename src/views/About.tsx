import React from "react";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const About: React.FC = () => {
  useDocumentTitle("About Me");
  return (
    <section className="h-full">
      <div className="mx-auto flex h-full max-w-screen-xl flex-col-reverse items-center justify-between lg:flex-row lg:space-x-3">
        {/* text-left */}
        <AboutInfo />
        {/* image-right */}
        <Avatar />
      </div>
    </section>
  );
};

const AboutInfo: React.FC = () => {
  return (
    <div className="h-1/2 space-y-3 px-3 lg:h-auto lg:w-1/2">
      <h1 className="animate-fade-down animate-once animate-duration-1000 animate-ease-in-out bg-gradient-to-b from-primary from-50% to-background bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl lg:text-left lg:text-6xl">
        Get it done, then make it beautiful.
      </h1>
      <p className="animate-fade animate-delay-500 animate-once animate-duration-1000 animate-ease-in-out py-6 text-justify text-muted-foreground">
        I focus on functionality—ensuring the project works as intended. Once
        the core features are in place and the application is stable, I then
        shift my attention to refining the design and enhancing the user
        experience. <br /> <br /> I am a 4th-year student at Polytechnic
        University of the Philippines San Pedro Campus, passionate about web
        development. Your just so average programmer, I love and practice the
        MERN stack, with a strong focus on front-end development.
      </p>
    </div>
  );
};

const Avatar: React.FC = () => {
  return (
    <div className="animate-jump-in animate-once animate-duration-700 animate-delay-500 animate-ease-in-out grid h-1/2 place-items-center px-3 lg:h-auto lg:w-1/2">
      <img className="size-64 rounded-full bg-purple-400" src="" alt="" />
    </div>
  );
};

export default About;
