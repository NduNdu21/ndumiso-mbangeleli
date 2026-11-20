import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

const root = document.getElementById("root");
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Pages pre-rendered for their own URL are hydrated. 404.html is shared by
// every unknown path, so it is rendered fresh to show the real pathname.
if (root.hasAttribute("data-prerendered")) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
