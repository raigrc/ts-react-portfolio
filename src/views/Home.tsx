import React from "react";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const Home: React.FC = () => {
  useDocumentTitle("Home");
  return (
    <section className="h-full">
      <div className="mx-auto max-w-screen-xl py-3">Home</div>
    </section>
  );
};

export default Home;
