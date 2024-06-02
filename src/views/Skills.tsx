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
      type: "frontend",
    },
    {
      name: "CSS",
      baseURL: CSSLogo,
      type: "frontend",
    },
    {
      name: "Javascript",
      baseURL: JSLogo,
      type: "frontend",
    },
    {
      name: "React",
      baseURL: ReactLogo,
      type: "frontend",
    },
    {
      name: "Typescript",
      baseURL: TSLogo,
      type: "frontend",
    },
    {
      name: "Git",
      baseURL: GitLogo,
      type: "version-control",
    },
    {
      name: "Tailwind",
      baseURL: TailwindLogo,
      type: "frontend",
    },
    {
      name: "SCSS",
      baseURL: SCSSLogo,
      type: "frontend",
    },
    {
      name: "Node JS",
      baseURL: NodeLogo,
      type: "backend",
    },
    {
      name: "PHP",
      baseURL: PHPLogo,
      type: "backend",
    },
    {
      name: "Laravel",
      baseURL: BladeLogo,
      type: "backend",
    },
    {
      name: "Mongo DB",
      baseURL: MongoLogo,
      type: "database",
    },
    {
      name: "Express JS",
      baseURL: ExpressLogo,
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
            <Card
              className="animate-jump-in animate-once animate-duration-500 animate-ease-in-out group bg-muted hover:bg-muted-foreground/40"
              key={index}
            >
              <CardHeader>
                <CardTitle className="text-center">{logo.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  className="mx-auto size-16 transition-all duration-500 group-hover:scale-125"
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
