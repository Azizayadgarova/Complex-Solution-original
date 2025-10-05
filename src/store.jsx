// src/store.jsx
import React, { Suspense, lazy } from "react";
import { createHashRouter, redirect } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Loading from "./Components/loading";

const wrap = (node) => <Suspense fallback={<Loading />}>{node}</Suspense>;

// Layoutlar
const MainLayout   = lazy(() => import("./layout/MainLayout.jsx"));
const AdminLayout  = lazy(() => import("./layout/AdminLayout.jsx"));

// Routelar
const Home         = lazy(() => import("./rautes/Home.jsx"));
const Abaute       = lazy(() => import("./rautes/Abaute.jsx"));
const Contact      = lazy(() => import("./rautes/Contact.jsx"));
const Portfolio    = lazy(() => import("./rautes/Portfolio.jsx"));
const Servises     = lazy(() => import("./rautes/Servises.jsx"));
const SignIn       = lazy(() => import("./Components/SignIn.jsx"));

// Service ichki bo‘limlari
const Advantage1   = lazy(() => import("./Components/Advantage1.jsx"));
const Advantage2   = lazy(() => import("./Components/Advantage2.jsx"));
const Advantage3   = lazy(() => import("./Components/Advantage3.jsx"));
const Advantage4   = lazy(() => import("./Components/Advantage4.jsx"));
const Advantage5   = lazy(() => import("./Components/Advantage5.jsx"));

// Admin sahifalar
const AdminComponent = lazy(() => import("./Components/AdminComponent.jsx"));
const ContactUs      = lazy(() => import("./Components/ContactUs.jsx"));

const router = createHashRouter([
  {
    path: "/",
    element: wrap(<MainLayout />),
    children: [
      { index: true, element: wrap(<Home />) },
      { path: "aboute", element: wrap(<Abaute />) },
      {
        path: "services",
        element: wrap(<Servises />),
        children: [
          { index: true, element: wrap(<Advantage1 />) },
          { path: "one",   element: wrap(<Advantage2 />) },
          { path: "two",   element: wrap(<Advantage3 />) },
          { path: "three", element: wrap(<Advantage4 />) },
          { path: "four",  element: wrap(<Advantage5 />) },
        ],
      },
      { path: "portfolio", element: wrap(<Portfolio />) },
      { path: "contact",   element: wrap(<Contact />) },
    ],
  },
  {
    path: "/main",
    element: (
      <ProtectedRoute>
        {wrap(<AdminLayout />)}
      </ProtectedRoute>
    ),
    children: [
      { index: true,      element: wrap(<ContactUs />) },
      { path: "projects", element: wrap(<AdminComponent />) },
      { path: "contacts", element: wrap(<ContactUs />) },
    ],
  },
  { path: "/signin", element: wrap(<SignIn />) },

  // Eski linklar
  { path: "/main-content", loader: () => redirect("/main") },
  { path: "*", loader: () => redirect("/") },
]);

export default router;
