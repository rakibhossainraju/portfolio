import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/styles.sass";
import App from "./App.jsx";

const rootId = "root";

const root = createRoot(document.getElementById(rootId));
root.render(<App />);