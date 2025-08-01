import { createRoot } from "react-dom/client";
import App from "./App";
import React from "react";
import "./styles/global.css"

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
