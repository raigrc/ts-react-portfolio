import React from "react";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const About: React.FC = () => {
  useDocumentTitle("About Me");
  return (
    <section className="h-full">
      <div className="flex flex-col-reverse items-center justify-between h-full max-w-screen-xl py-3 mx-auto lg:space-x-3 lg:flex-row">
        {/* text-left */}
        <div className="px-3 space-y-3 lg:w-1/2 h-1/2 lg:h-auto">
          <h1 className="bg-gradient-to-b from-primary from-50% to-background bg-clip-text text-center text-4xl md:text-5xl font-bold text-transparent lg:text-6xl">
            Get it done, then make it beautiful.
          </h1>
          <p className="text-justify text-muted-foreground">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic illum
            itaque atque voluptate iure eligendi? Non sunt alias deleniti
            aperiam exercitationem? Dolores accusamus illo similique nemo minima
            qui nobis voluptatem!
          </p>
        </div>

        {/* image-right */}
        <div className="grid px-3 place-items-center lg:w-1/2 h-1/2 lg:h-auto">
          <img className="bg-purple-400 rounded-full size-64" src="" alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
