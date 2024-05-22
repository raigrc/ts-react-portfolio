import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider";
import {
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Home from "./views/Home";
import About from "./views/About";
import Contacts from "./views/Contacts";
import Projects from "./views/Projects";
import Skills from "./views/Skills";
import NotFound from "./views/NotFound";

const router = createHashRouter([
  {
    path: "/ts-react-portfolio",
    element: <Layout />,
    children: [
      {
        path: "/ts-react-portfolio",
        element: <Home />,
      },
      {
        path: "/ts-react-portfolio/about",
        element: <About />,
      },
      {
        path: "/ts-react-portfolio/projects",
        element: <Projects />,
      },
      {
        path: "/ts-react-portfolio/skills",
        element: <Skills />,
      },
      {
        path: "/ts-react-portfolio/contacts",
        element: <Contacts />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
