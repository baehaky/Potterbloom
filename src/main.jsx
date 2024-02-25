import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@material-tailwind/react";
import ErrorPage from "./layout/ErrorPage.jsx";
import Navigation from "./components/Navigation.jsx";
import ContactUsPage from "./view/ContactUsPage.jsx";
import LoginPage from "./layout/LoginPage.jsx";
import AuhtPage from "./hooks/AuthPage.jsx";
import RegisterPage from "./layout/RegisterPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <App /> },
      { path: "contact", element: <ContactUsPage /> },
    ],
  },
  { path: "/register", element: <RegisterPage /> , errorElement: <ErrorPage />},
  {path: "/login", element: <LoginPage />, errorElement: <ErrorPage />},
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
