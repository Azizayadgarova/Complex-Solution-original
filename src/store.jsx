// src/router.jsx
import React from "react";
import { createHashRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AdminLayout from "./layout/AdminLayout";
import SignIn from "./Components/SignIn";
import Home from "./rautes/Home";
import Abaute from "./rautes/Abaute";

import Contact from "./rautes/Contact";
import Portfolio from "./rautes/Portfolio";
import Servises from "./rautes/Servises";

import Advantage1 from "./Components/Advantage1";
import Advantage2 from "./Components/Advantage2";
import Advantage3 from "./Components/Advantage3";
import Advantage4 from "./Components/Advantage4";
import Advantage5 from "./Components/Advantage5";
import ProtectedRoute from "./ProtectedRoute";
import AdminComponent from "./Components/AdminComponent";
import ContactUs from "./Components/ContactUs";

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "aboute", element: <Abaute /> },
      {
        path: "services",
        element: <Servises />,
        children: [
          { index: true, element: <Advantage1 /> },
          { path: "one", element: <Advantage2 /> },
          { path: "two", element: <Advantage3 /> },
          { path: "three", element: <Advantage4 /> },
          { path: "four", element: <Advantage5 /> },
        ],
      },
      {
        path: "portfolio", element: <Portfolio />
      },
      { path: "contact", element: <Contact /> },
    ],
  },

  // ✅ Admin panel
  {
    path: "/main",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <ContactUs /> }, // default sahifa
      { path: "projects", element: <AdminComponent /> },
      { path: "contacts", element: <ContactUs /> },
    ],
  },

  { path: "/signin", element: <SignIn /> },
]);

export default router;
