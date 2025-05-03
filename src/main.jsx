import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes.jsx";
import "./styles/styles.sass";

const rootId = "root";

const root = createRoot(document.getElementById(rootId));
root.render(<RouterProvider router={router} />);