import React from "react";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import NotFoundIllu from "/404/alien_taken.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  useDocumentTitle("Not Found!");
  return (
    <section className="h-screen">
      <div className="flex h-full max-w-screen-xl p-3 mx-auto lg:flex-row lg:justify-between">
        <div className="z-50 flex flex-col items-center justify-center w-full space-y-3 lg:items-start lg:w-1/2">
          <h1 className="bg-gradient-to-b from-primary to-background bg-clip-text text-9xl md:text-[192px] lg:text-[240px]/tight font-black tracking-widest text-transparent">
            404
          </h1>
          <h3 className="text-3xl tracking-wide uppercase text-muted-foreground">
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

        <div className="absolute grid p-6 -translate-x-1/2 -translate-y-1/2 -z-10 lg:opacity-100 lg:relative lg:-translate-x-0 lg:-translate-y-0 lg:left-0 lg:top-0 lg:w-1/2 place-items-center top-1/2 left-1/2 opacity-30">
          <img className="size-full" src={NotFoundIllu} alt="" />
        </div>
      </div>
    </section>
  );
};

export default NotFound;
