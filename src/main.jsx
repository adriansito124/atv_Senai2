import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Products } from "./pages/products";
import { Api } from "./pages/api";
import { Map } from "./pages/map";
import { Graph } from "./pages/graph";
import { App } from "./App";

const router = createBrowserRouter([
  {
    path: "/products",
    element: <App><Products /></App>,
  },
  {
    path: "/api",
    element: <App><Api /></App>
  },
  {
    path: "/map",
    element: <App><Map /></App>
  },
  {
    path: "/graph",
    element: <App><Graph /></App>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);