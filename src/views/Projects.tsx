import React from "react";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import Calc1 from "/projects/calc-1.jpg";
import Calc2 from "/projects/calc-2.jpg";
import HTMLLogo from "/skills/file-type-html.svg";
import CSSLogo from "/skills/file-type-css.svg";
import JSLogo from "/skills/file-type-js-official.svg";

const Projects: React.FC = () => {
  useDocumentTitle("Projects");

  const allProjects = [
    {
      name: "Basic Calculator",
      techStack: {
        html: HTMLLogo,
        css: CSSLogo,
        js: JSLogo,
      },
      firstBg: Calc1,
      secondBg: Calc2,
    },
  ];
  return (
    <section className="h-full px-3">
      <div className="max-w-screen-xl py-3 mx-auto">
        <div className="flex h-full space-x-3">
          {/* <Card className="relative flex px-0 transition-all duration-500 group size-56 hover:flex-1">
            <div className="absolute w-full h-full transition-all duration-300">
              <img
                className="w-full h-full transition-all duration-500 delay-300 bg-red-500 opacity-30 grayscale group-hover:grayscale-0"
                src=""
                alt=""
              />
            </div>

            <div className="relative h-full">
              <CardHeader className="h-1/4">
                <CardTitle className="">Simple Calculator</CardTitle>
              </CardHeader>
              <CardContent className="absolute transition-all opacity-0 h-2/4 duration-0 group-hover:relative group-hover:opacity-100 group-hover:duration-1000 ">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae quis omnis autem eius veniam ratione.
                </p>
              </CardContent>
              <CardFooter className="absolute justify-end opacity-0 h-1/4 group-hover:relative group-hover:flex group-hover:opacity-100 group-hover:transition-all group-hover:delay-300 group-hover:duration-1000">
                <Button>Read more</Button>
              </CardFooter>
            </div>
          </Card> */}
          {allProjects.map((project, index) => (
            <Card
              className="relative w-full h-56 px-0 overflow-hidden transition-all duration-500 group md:w-64 md:hover:w-96"
              key={index}
            >
              <img
                className="absolute z-0 transition-all duration-500 delay-100 rounded-lg group-hover:opacity-0"
                src={project.firstBg}
                alt=""
                id="bg"
              />
              <img
                className="absolute transition-all duration-500 delay-100 bg-red-500 bg-no-repeat bg-cover opacity-0 group-hover:opacity-20"
                src={project.secondBg}
                alt=""
                id="bg-hover"
              />
              <CardHeader className="relative z-10 text-center duration-500 opacity-0 group-hover:opacity-100">
                <CardTitle>Simple Calculator</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 duration-500 opacity-0 group-hover:opacity-100">
                <div className="flex space-x-3">
                  {Object.entries(project.techStack).map(([tech, logo]) => (
                    <div
                      className="rounded-full size-10 bg-background hover:bg-primary"
                      key={tech}
                    >
                      <img className="p-2 " src={logo} alt="" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
