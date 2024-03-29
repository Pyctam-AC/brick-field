import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/brick-field">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
