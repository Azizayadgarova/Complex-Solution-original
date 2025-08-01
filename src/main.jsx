import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./store.jsx";
import './i18n';
import { AdminProvider } from "./context/AdminContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AdminProvider>
      <RouterProvider router={router} />
    </AdminProvider>
  </React.StrictMode>
);
