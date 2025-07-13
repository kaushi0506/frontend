import React from "react";
import ReactDOM from "react-dom/client"; // 👈 note the '/client'
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// ✅ React 18+ way
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
