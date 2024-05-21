import React from "react";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const About: React.FC = () => {
  useDocumentTitle("About Me");
  return (
    <section className="h-full">
      <div className="mx-auto flex h-full max-w-screen-xl items-center space-x-3 py-3">
        {/* text-left */}
        <div className="w-1/2 space-y-3 px-3">
          <h1 className="bg-gradient-to-b from-primary from-50% to-background bg-clip-text text-6xl font-bold text-transparent">
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
        <div className="w-1/2 px-3 grid place-items-center">
          <img className="size-64 rounded-full bg-purple-400" src="" alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
