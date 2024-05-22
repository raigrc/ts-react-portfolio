import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";
import { Button } from "../ui/button";

import { Sun, Moon } from "lucide-react";

const Layout: React.FC = () => {
  const { setTheme } = useTheme();
  return (
    <div className="flex flex-col h-screen font-montserrat">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/ts-react-portfolio" className="text-2xl font-bold">
              <h1>
                &lt;Rai<span className="text-primary">.Dev</span>&gt;
              </h1>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLink
              to="/ts-react-portfolio"
              className={({ isActive }) =>
                isActive ? "font-bold text-primary" : ""
              }
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </NavLink>

            <NavLink
              to="/ts-react-portfolio/about"
              className={({ isActive }) =>
                isActive ? "font-bold  text-primary" : ""
              }
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </NavLink>

            <NavLink
              to="/ts-react-portfolio/projects"
              className={({ isActive }) =>
                isActive ? "font-bold  text-primary" : ""
              }
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Projects
              </NavigationMenuLink>
            </NavLink>

            <NavLink
              to="/ts-react-portfolio/skills"
              className={({ isActive }) =>
                isActive ? "font-bold  text-primary" : ""
              }
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Skills
              </NavigationMenuLink>
            </NavLink>

            <NavLink
              to="/ts-react-portfolio/contacts"
              className={({ isActive }) =>
                isActive ? "font-bold  text-primary" : ""
              }
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contacts
              </NavigationMenuLink>
            </NavLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Outlet />
    </div>
  );
};

export default Layout;
