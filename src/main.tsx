import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./globals.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="flex w-[1440px] flex-col items-center">
      <App />
    </div>
  </React.StrictMode>
);
