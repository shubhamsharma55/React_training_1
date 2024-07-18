import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./app/Home/Home.jsx";
import Gallery from "./app/gallery/Gallery.jsx";
import Aboutus from "./app/gallery/Aboutus.jsx";
import Contactus from "./app/gallery/Contactus.jsx";

import Provider from "./components/functional/Provider.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider>
        <Home />
      </Provider>
    ),
  },
  {
    path: "/gallery",
    element: (
      <Provider>
        <Gallery />
      </Provider>
    ),
  },
  {
    path: "/aboutus",
    element: (
      <Provider>
        <Aboutus />
      </Provider>
    ),
  },
  {
    path: "/contactus",
    element: (
      <Provider>
        <Contactus />
      </Provider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
