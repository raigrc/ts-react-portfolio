import React from "react";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const NotFound: React.FC = () => {
  useDocumentTitle("Not Found!");
  return (
    <section className="h-full">
      <div className="mx-auto max-w-screen-xl py-3">NotFound</div>
    </section>
  );
};

export default NotFound;
