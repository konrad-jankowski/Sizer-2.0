import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToggleCardContextProvider } from "./context/ToggleCardContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToggleCardContextProvider>
      <App />
    </ToggleCardContextProvider>
  </React.StrictMode>
);
