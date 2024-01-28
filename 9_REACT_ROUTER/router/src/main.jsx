import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import Contact from "./routes/Contact.jsx";

// Pagina de erro
import ErrorPage from "./routes/ErrorPage.jsx";

// Componente base
import Home from "./routes/Home.jsx";

// Criando router
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // Componente base
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
