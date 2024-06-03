import useDocumentTitle from "@/hooks/useDocumentTitle";
import CodeReview from "/home/code_review.svg";
import SVGImage from "@/shared/components/SVGImage";
import HomeInformation from "@/components/Home/HomeInformation";

const Home = () => {
  useDocumentTitle("Home");

  return (
    <section className="h-full">
      <div className="flex flex-col h-full max-w-screen-xl px-3 py-3 mx-auto lg:flex-row">
        <HomeInformation />
        <SVGImage img={CodeReview} />
      </div>
    </section>
  );
};

export default Home;
