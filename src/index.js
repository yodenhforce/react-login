import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { React } from "react";
import { App } from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
