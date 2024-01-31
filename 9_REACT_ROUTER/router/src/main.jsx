import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import Contact from "./routes/Contact.jsx";

// Pagina de erro
import ErrorPage from "./routes/ErrorPage.jsx";

// Componente base
import Home from "./routes/Home.jsx";

// Rota dinamica
import Product from "./routes/Product.jsx";

// Nested route
import Info from "./routes/Info.jsx";

// Search
import Search from "./routes/Search.jsx";

// Criando router
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

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
      // Rota dinamica
      {
        path: "products/:id",
        element: <Product />,
      },
      // Nested route
      {
        path: "products/:id/info",
        element: <Info />,
      },
      // Search
      {
        path: "search",
        element: <Search />,
      },
      // Direction
      {
        path: "teste",
        element: <Navigate to="/" />
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
