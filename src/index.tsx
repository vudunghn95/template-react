import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import.meta.glob("./components/*.css", { eager: true });

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode  >
    <App />
  </React.StrictMode>
);
