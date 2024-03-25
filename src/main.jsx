import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "swiper/css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// fonts and icons
import "././assets/css/icofont.min.css";
import "././assets/css/animate.css";
import "././assets/css/style.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/Pages/About.jsx";
import Blog from "./Components/Pages/Blog.jsx";
import Contact from "./Components/Pages/Contact.jsx";
import Home from "./Components/Pages/Home.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/Blog",
        element: <Blog/>
      },
      {
        path: "/Contact",
        element: <Contact/>
      },
      {
        path: "/",
        element: <Home/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  // </React.StrictMode>,
);
