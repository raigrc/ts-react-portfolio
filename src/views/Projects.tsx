import React, { useState } from "react";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import ECommerce from "/projects/e-commerce.jpg";
import ECommerce1 from "/projects/e-commerce1.jpg";
import ECommerce2 from "/projects/e-commerce2.jpg";
import OLBooking from "/projects/online-booking.jpg";
import OLBooking1 from "/projects/online-booking1.jpg";
import OLBooking2 from "/projects/online-booking2.jpg";
import Workout from "/projects/workout-tracker.jpg";
import Workout1 from "/projects/workout-tracker1.jpg";
import Workout2 from "/projects/workout-tracker2.jpg";
import JSFCB from "/projects/2048-game.jpg";
import JSFCB1 from "/projects/2048-game1.jpg";
import JSFCB2 from "/projects/2048-game2.jpg";
import E4EJ from "/projects/e4ej.jpg";
import E4EJ1 from "/projects/e4ej1.png";

import HTMLLogo from "/skills/file-type-html.svg";
import CSSLogo from "/skills/file-type-css.svg";
import JSLogo from "/skills/file-type-js-official.svg";
import PHPLogo from "/skills/file-type-php.svg";
import SCSSLogo from "/skills/file-type-scss2.svg";
import MongoLogo from "/skills/file-type-mongo.svg";
import ExpressLogo from "/skills/file-type-express.svg";
import ReactLogo from "/skills/file-type-reactjs.svg";
import NodeLogo from "/skills/file-type-node.svg";
import BladeLogo from "/skills/file-type-blade.svg";
import TailwindLogo from "/skills/file-type-tailwind.svg";

const Projects: React.FC = () => {
  useDocumentTitle("Projects");

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const allProjects = [
    {
      name: "E-Commerce Website",
      description:
        "This is my 3rd year college e-commerce website project! This platform is designed to deliver a smooth and enjoyable online shopping experience. Built with HTML, CSS, JavaScript, and native PHP, it caters to both shoppers and administrators, providing a secure and user-friendly environment.",
      techStack: {
        HTML: HTMLLogo,
        CSS: CSSLogo,
        JavaScript: JSLogo,
        PHP: PHPLogo,
      },
      coverPic: ECommerce,
      firstBg: ECommerce1,
      secondBg: ECommerce2,
      date: new Date("2023-02"),
    },
    {
      name: "Online Booking Resort",
      description:
        "The Online Resort Booking System is a web application project from my 3rd year college, also built using HTML, CSS, JavaScript, and Native PHP, providing users with a platform to discover, explore, and book resort accommodations online. The system offers a seamless booking experience, allowing users to search for available resorts, view details and amenities, select dates, make reservations, and manage bookings. ",
      techStack: {
        HTML: HTMLLogo,
        CSS: CSSLogo,
        JavaScript: JSLogo,
        SCSS: SCSSLogo,
        PHP: PHPLogo,
      },
      coverPic: OLBooking,
      firstBg: OLBooking1,
      secondBg: OLBooking2,
      date: new Date("2023-02"),
    },
    {
      name: "Workout Tracker",
      description:
        "Introducing our Workout Tracker – a simple web application designed to help fitness enthusiasts track their workouts, monitor progress, and achieve their fitness goals. Built with HTML, CSS, JavaScript, and native PHP, this platform offers a user-friendly interface and robust features to keep you motivated and on track.",
      techStack: {
        "Mongo DB": MongoLogo,
        "Express JS": ExpressLogo,
        "React JS": ReactLogo,
        "Node JS": NodeLogo,
      },
      coverPic: Workout,
      firstBg: Workout1,
      secondBg: Workout2,
      date: new Date("2024-03"),
    },
    {
      name: "2048",
      description:
        "This project is a browser-based implementation of the popular 2048 puzzle game, created as part of an online workshop of Zuitt - Coding Bootcamp. Using HTML, CSS, and JavaScript, this game provides an engaging and interactive experience for players. The goal of the game is to combine tiles with the same numbers to reach the elusive 2048 tile.",
      techStack: {
        HTML: HTMLLogo,
        CSS: CSSLogo,
        JavaScript: JSLogo,
      },
      coverPic: JSFCB,
      firstBg: JSFCB1,
      secondBg: JSFCB2,
      date: new Date("2024-03"),
    },
    {
      name: "Eskwela4EveryJuan",
      description:
        "Eskwela4EveryJuan is a Learning Management System (LMS) with integration of AI (GPT-3.5) developed using the Laravel framework. This capstone project is designed specifically for Micro, Small, and Medium Enterprises (MSMEs) to facilitate an inclusive and efficient online learning environment. The primary aim of this project is to equip MSMEs with the knowledge and skills they need to become successful entrepreneurs.",
      techStack: {
        HTML: HTMLLogo,
        CSS: CSSLogo,
        JavaScript: JSLogo,
        Laravel: BladeLogo,
        "Tailwind CSS": TailwindLogo,
      },
      coverPic: E4EJ,
      firstBg: E4EJ1,
      secondBg: E4EJ,
      date: new Date("2024-04"),
    },
  ];

  const formatDate = (date: Date): string => {
    return new Date(date).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
    });
  };

  allProjects.sort((a: any, b: any) => b.date - a.date);

  return (
    <section className="h-full px-3">
      <div className="max-w-screen-xl py-3 mx-auto">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {allProjects.map((project, index) => (
            <Card
              className={`group relative overflow-hidden px-0 md:w-96 lg:h-56 lg:w-auto lg:hover:col-span-2 ${
                hoveredIndex !== null &&
                ((hoveredIndex === 3 && index === 0) ||
                  (hoveredIndex < 3 && index === 3))
                  ? "lg:hidden"
                  : ""
              }`}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                className="absolute z-0 object-cover w-full h-full transition-all duration-500 delay-100 bg-background group-hover:opacity-0"
                src={project.firstBg}
                alt=""
                id="bg"
              />
              <img
                className="absolute object-cover w-full h-full transition-all duration-500 delay-100 bg-red-500 opacity-0 bg-background group-hover:opacity-20"
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
                    <TooltipProvider key={tech}>
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="rounded-full size-10 bg-foreground/30 hover:bg-primary">
                            <img className="p-2" src={logo} alt="" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>{tech}</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="relative z-10 flex items-center justify-between duration-500 opacity-0 group-hover:opacity-100">
                <div className="text-muted-foreground">
                  <p>{formatDate(project.date)}</p>
                </div>
                <Dialog>
                  <DialogTrigger>
                    <Button>Read more</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <div className="my-6">
                        <img src={project.coverPic} alt="" />
                      </div>
                      <DialogTitle>{project.name}</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>{project.description}</DialogDescription>
                  </DialogContent>
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
