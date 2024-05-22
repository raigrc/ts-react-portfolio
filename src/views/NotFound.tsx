import React from "react";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import NotFoundIllu from "/404/alien_taken.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  useDocumentTitle("Not Found!");
  return (
    <section className="h-screen">
      <div className="flex justify-between h-full max-w-screen-xl mx-auto">
        <div className="flex flex-col justify-center w-1/2 space-y-3">
          <h1 className="bg-gradient-to-b from-primary to-background bg-clip-text text-[240px]/tight font-black tracking-widest text-transparent">
            404
          </h1>
          <h3 className="text-3xl tracking-wide uppercase text-muted-foreground">
            Page not found!
          </h3>
          <p className="py-3 text-base/relaxed">
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

        <div className="grid w-1/2 p-6 place-items-center">
          <img className="size-full" src={NotFoundIllu} alt="" />
        </div>
      </div>
    </section>
  );
};

export default NotFound;
