import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Connexion from "./pages/Connexion/Connexion";
import Suggestion from "./pages/Suggestion/Suggestion";
import Inscription from "./pages/Inscription/Inscription";
import Duo from "./pages/Categories/Duo";
import App from "./App";

const ApiUrl = import.meta.env.VITE_API_URL;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Duo />,
        loader: async () => fetch(`${ApiUrl}/api/games`),
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
        path: "/suggestion",
        element: <Suggestion />,
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
