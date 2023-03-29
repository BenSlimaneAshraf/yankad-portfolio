import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store";
import { Provider } from "react-redux";
import "remixicon/fonts/remixicon.css";
import "./index.scss";
import AppRoutes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>
);
