import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Connexion from "./pages/Connexion/Connexion";
import Inscription from "./pages/Inscription/Inscription";
import Duo from "./pages/Duo/Duo";
import Multi from "./pages/Multi/Multi";
import App from "./App";

const ApiUrl = import.meta.env.VITE_API_URL;


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,     
      },
      {
        path: "/connexion",
        element: <Connexion />,
      },
      {
        path: "/inscription",
        element: <Inscription />,
      },
      {
        path: "/enduo",
        element: <Duo />,
        loader: async () => fetch(`${ApiUrl}/api/games`),  
      },
      {
        path: "/multijoueurs",
        element: <Multi />,
        loader: async () => fetch(`${ApiUrl}/api/games`),  
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
