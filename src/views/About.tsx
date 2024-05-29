import React from "react";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const About: React.FC = () => {
  useDocumentTitle("About Me");
  return (
    <section className="h-full">
      <div className="flex flex-col-reverse items-center justify-between h-full max-w-screen-xl mx-auto lg:flex-row lg:space-x-3">
        {/* text-left */}
        <div className="px-3 space-y-3 h-1/2 lg:h-auto lg:w-1/2">
          <h1 className="bg-gradient-to-b from-primary from-50% to-background bg-clip-text lg:text-left text-center text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
            Get it done, then make it beautiful.
          </h1>
          <p className="py-6 text-justify text-muted-foreground">
            I focus on functionality—ensuring the project works as intended.
            Once the core features are in place and the application is stable, I
            then shift my attention to refining the design and enhancing the
            user experience. <br /> <br /> I am a 4th-year student at
            Polytechnic University of the Philippines San Pedro Campus,
            passionate about web development. Your just so average programmer, I
            love and practice the MERN stack, with a strong focus on front-end
            development.
          </p>
        </div>

        {/* image-right */}
        <div className="grid px-3 h-1/2 place-items-center lg:h-auto lg:w-1/2">
          <img className="bg-purple-400 rounded-full size-64" src="" alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
