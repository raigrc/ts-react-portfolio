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
import PHPLogo from "/skills/file-type-php.svg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Projects: React.FC = () => {
  useDocumentTitle("Projects");

  const allProjects = [
    {
      name: "E-Commerce Website",
      techStack: {
        html: HTMLLogo,
        css: CSSLogo,
        js: JSLogo,
        php: PHPLogo,
      },
      firstBg: Calc1,
      secondBg: Calc2,
      dateCreated: "February 28, 2023",
    },
  ];
  return (
    <section className="h-full px-3">
      <div className="max-w-screen-xl py-3 mx-auto">
        <div className="flex h-full space-x-3">
          {allProjects.map((project, index) => (
            <Card
              className="relative w-full h-48 px-0 overflow-hidden transition-all duration-500 group md:w-64 md:hover:w-96"
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
                <CardTitle>{project.name}</CardTitle>
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
              <CardFooter className="relative z-10 flex items-center justify-between duration-500 opacity-0 gorup-hover:duration-0 group-hover:opacity-100">
                <div className="text-muted-foreground">
                  <p>{project.dateCreated}</p>
                </div>
                <Dialog>
                  <DialogTrigger>
                    <Button>Read more</Button>
                  </DialogTrigger>
                  <DialogContent></DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
