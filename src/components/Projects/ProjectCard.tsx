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

import { formatDate } from "@/utils/DateFormat";

export interface MyProjects {
  name: string;
  description: string;
  techStack: {
    HTML?: string;
    CSS?: string;
    JavaScript?: string;
    SCSS?: string;
    "Mongo DB"?: string;
    "Express JS"?: string;
    "React JS"?: string;
    "Node JS"?: string;
    PHP?: string;
    Laravel?: string;
    "Tailwind CSS"?: string;
  };
  coverPic: string;
  firstBg: string;
  secondBg: string;
  date: Date;
}

interface ProjectsProps {
  project: MyProjects;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

const ProjectCard: React.FC<ProjectsProps> = ({
  project,
  index,
  hoveredIndex,
  setHoveredIndex,
}) => {
  return (
    <Card
      className={`group relative animate-fade overflow-hidden px-0 animate-duration-700 animate-once animate-ease-in-out md:w-96 lg:h-56 lg:w-auto lg:hover:col-span-2 ${
        hoveredIndex !== null &&
        ((hoveredIndex === 3 && index === 0) ||
          (hoveredIndex < 3 && index === 3))
          ? "lg:hidden"
          : ""
      }`}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <img
        className="absolute z-0 h-full w-full bg-background object-cover transition-all delay-100 duration-500 group-hover:opacity-0"
        src={project.firstBg}
        alt=""
        id="bg"
      />
      <img
        className="absolute h-full w-full bg-background bg-red-500 object-cover opacity-0 transition-all delay-100 duration-500 group-hover:opacity-20"
        src={project.secondBg}
        alt=""
        id="bg-hover"
      />
      <CardHeader className="relative z-10 text-center opacity-0 duration-500 group-hover:opacity-100">
        <CardTitle>{project.name}</CardTitle>
      </CardHeader>
      <CardContent className="relative z-10 opacity-0 duration-500 group-hover:opacity-100">
        <div className="flex space-x-3">
          <TooltipProvider>
            {Object.entries(project.techStack).map(([tech, logo]) => (
              <Tooltip key={tech}>
                <TooltipTrigger>
                  <div className="size-10 rounded-full bg-foreground/30 hover:bg-primary">
                    <img className="p-2" src={logo} alt={tech} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>{tech}</TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </CardContent>
      <CardFooter className="relative z-10 flex items-center justify-between opacity-0 duration-500 group-hover:opacity-100">
        <div className="text-muted-foreground">
          <p>{formatDate(project.date)}</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Read more</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <div className="my-6">
                <img src={project.coverPic} alt={project.name} />
              </div>
              <DialogTitle>{project.name}</DialogTitle>
            </DialogHeader>
            <DialogDescription>{project.description}</DialogDescription>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
