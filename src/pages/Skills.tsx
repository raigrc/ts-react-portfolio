import useDocumentTitle from "@/hooks/useDocumentTitle";
import HTMLLogo from "/skills/file-type-html.svg";
import CSSLogo from "/skills/file-type-css.svg";
import JSLogo from "/skills/file-type-js-official.svg";
import ReactLogo from "/skills/file-type-reactjs.svg";
import TSLogo from "/skills/file-type-typescript-official.svg";
import NodeLogo from "/skills/file-type-node.svg";
import BladeLogo from "/skills/file-type-blade.svg";
import TailwindLogo from "/skills/file-type-tailwind.svg";
import SCSSLogo from "/skills/file-type-scss2.svg";
import PHPLogo from "/skills/file-type-php.svg";
import GitLogo from "/skills/file-type-git.svg";
import MongoLogo from "/skills/file-type-mongo.svg";
import ExpressLogo from "/skills/file-type-express.svg";
import SkillCard, { SkillLogos } from "@/components/Skills/SkillCard";

const Skills = () => {
  useDocumentTitle("Skills");

  const logos: SkillLogos[] = [
    {
      name: "HTML",
      URL: HTMLLogo,
      type: "frontend",
    },
    {
      name: "CSS",
      URL: CSSLogo,
      type: "frontend",
    },
    {
      name: "Javascript",
      URL: JSLogo,
      type: "frontend",
    },
    {
      name: "React",
      URL: ReactLogo,
      type: "frontend",
    },
    {
      name: "Typescript",
      URL: TSLogo,
      type: "frontend",
    },
    {
      name: "Git",
      URL: GitLogo,
      type: "version-control",
    },
    {
      name: "Tailwind",
      URL: TailwindLogo,
      type: "frontend",
    },
    {
      name: "SCSS",
      URL: SCSSLogo,
      type: "frontend",
    },
    {
      name: "Node JS",
      URL: NodeLogo,
      type: "backend",
    },
    {
      name: "PHP",
      URL: PHPLogo,
      type: "backend",
    },
    {
      name: "Laravel",
      URL: BladeLogo,
      type: "backend",
    },
    {
      name: "Mongo DB",
      URL: MongoLogo,
      type: "database",
    },
    {
      name: "Express JS",
      URL: ExpressLogo,
      type: "backend",
    },
  ];

  return (
    <section className="h-full">
      <div className="mx-auto max-w-screen-xl py-3">
        <div className="grid place-items-center py-6">
          <h1 className="text-3xl font-medium text-primary">My Skills</h1>
        </div>
        <div className="grid grid-cols-2 gap-3 px-3 md:grid-cols-4 lg:grid-cols-6">
          {logos.map((logo, index) => (
            <SkillCard skillLogo={logo} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
