import React from "react";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills: React.FC = () => {
  useDocumentTitle("Skills");

  const logos = [
    {
      name: "HTML",
      baseURL: HTMLLogo,
    },
    {
      name: "CSS",
      baseURL: CSSLogo,
    },
    {
      name: "Javascript",
      baseURL: JSLogo,
    },
    {
      name: "React",
      baseURL: ReactLogo,
    },
    {
      name: "Typescript",
      baseURL: TSLogo,
    },
    {
      name: "Git",
      baseURL: GitLogo,
    },
    {
      name: "Tailwind",
      baseURL: TailwindLogo,
    },
    {
      name: "SCSS",
      baseURL: SCSSLogo,
    },
    {
      name: "Node JS",
      baseURL: NodeLogo,
    },
    {
      name: "PHP",
      baseURL: PHPLogo,
    },
    {
      name: "Laravel",
      baseURL: BladeLogo,
    },
    {
      name: "Mongo DB",
      baseURL: MongoLogo,
    },
    {
      name: "Express JS",
      baseURL: ExpressLogo,
    },
  ];
  return (
    <section className="h-full">
      <div className="max-w-screen-xl py-3 mx-auto">
        <div className="grid py-6 place-items-center">
          <h1 className="text-3xl font-medium text-primary">My Skills</h1>
        </div>
        <div className="grid grid-cols-2 gap-3 px-3 md:grid-cols-4 lg:grid-cols-6">
          {logos.map((logo, index) => (
            <Card className="bg-muted" key={index}>
              <CardHeader>
                <CardTitle className="text-center">{logo.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  className="mx-auto size-16"
                  src={logo.baseURL}
                  alt={logo.name}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
