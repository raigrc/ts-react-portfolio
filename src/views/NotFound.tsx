import React from "react";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import NotFoundIllu from "/404/alien_taken.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SVGImage from "@/components/pages/SVGImage";

const NotFound: React.FC = () => {
  useDocumentTitle("Not Found!");
  return (
    <section className="h-screen">
      <div className="mx-auto flex h-full max-w-screen-xl p-3 lg:flex-row lg:justify-between">
        <NotFountTextInfo />
        <SVGImage img={NotFoundIllu} />
      </div>
    </section>
  );
};

const NotFountTextInfo: React.FC = () => {
  return (
    <div className="z-50 flex w-full flex-col items-center justify-center space-y-3 lg:w-1/2 lg:items-start">
      <h1 className="bg-gradient-to-b from-primary to-background bg-clip-text text-9xl font-black tracking-widest text-transparent md:text-[192px] lg:text-[240px]/tight">
        404
      </h1>
      <h3 className="text-3xl uppercase tracking-wide text-muted-foreground">
        Page not found!
      </h3>
      <p className="py-3 text-center text-base/relaxed lg:text-left">
        Oh no! It looks like you got lost and found by the aliens.
        <br /> We couldn't find the page you are looking for.
        <br /> Please go back before they{" "}
        <span className="font-bold text-primary">☍⟟⎅⋏⏃⌿</span> you.
        <br />
        Thank you for{" "}
        <span className="font-bold text-primary">⊬⍜⎍⍀ ⎍⋏⎅⟒⍀⌇⏁⏃⋏⎅⟟⋏☌</span>
      </p>
      <div>
        <Link to="/">
          <Button>Go Back Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
