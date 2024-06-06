import "./styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router/route.tsx";
import { ThemeProvider } from "./context/theme/index.ts";
import "./i18n"; // Import i18n configuration
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>
);
