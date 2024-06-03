import useDocumentTitle from "@/hooks/useDocumentTitle";
import NotFoundIllu from "/404/alien_taken.svg";
import SVGImage from "@/shared/components/SVGImage";
import NotFoundInformation from "@/components/NotFound/NotFoundInformation";

const NotFound = () => {
  useDocumentTitle("Not Found!");
  return (
    <section className="h-screen">
      <div className="mx-auto flex h-full max-w-screen-xl p-3 lg:flex-row lg:justify-between">
        <NotFoundInformation />
        <SVGImage img={NotFoundIllu} />
      </div>
    </section>
  );
};

export default NotFound;
