import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./global.css";
import AppRoutes from "./AppRoutes";
import Auth0ProviderWithNavigate from "./auth/Auth0ProviderWithNavigate";

/**
 * Root component
 * @description Root component for the application that renders the AppRoutes component
 */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Auth0ProviderWithNavigate>
        <AppRoutes />
      </Auth0ProviderWithNavigate>
    </Router>
  </StrictMode>
);
