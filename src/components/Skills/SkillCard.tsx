import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

export interface SkillLogos {
  name: string;
  URL: string;
  type: "frontend" | "backend" | "database" | "version-control";
}

interface LogoProps {
  skillLogo: SkillLogos;
}

const SkillCard: React.FC<LogoProps> = ({ skillLogo }) => {
  return (
    <Card className="group animate-jump-in bg-muted animate-duration-500 animate-once animate-ease-in-out hover:bg-muted-foreground/40">
      <CardHeader>
        <CardTitle className="text-center">{skillLogo.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <img
          className="mx-auto transition-all duration-500 size-16 group-hover:scale-125"
          src={skillLogo.URL}
          alt={skillLogo.name}
        />
      </CardContent>
    </Card>
  );
};

export default SkillCard;
