import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
import { Button } from "../ui/button";

const NotFoundInformation = () => {
  const [AlienLang] = useTypewriter({
    words: ["☍⟟⎅⋏⏃⌿"],
  });
  const [AlienLang2] = useTypewriter({
    words: ["⊬⍜⎍⍀ ⎍⋏⎅⟒⍀⌇⏁⏃⋏⎅⟟⋏☌"],
  });
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
        <span className="font-bold text-primary">{AlienLang}</span> you.
        <br />
        Thank you for{" "}
        <span className="font-bold text-primary">{AlienLang2}</span>
      </p>
      <div>
        <Link to="/">
          <Button>Go Back Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundInformation;
