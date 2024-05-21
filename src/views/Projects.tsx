import React from "react";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const Projects: React.FC = () => {
  useDocumentTitle("Projects");
  return (
    <section className="h-full">
      <div className="mx-auto max-w-screen-xl py-3">Projects</div>
    </section>
  );
};

export default Projects;
