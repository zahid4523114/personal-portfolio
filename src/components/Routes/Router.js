import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Skills from "../Skills/Skills";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/skills",
        element: <Skills></Skills>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
