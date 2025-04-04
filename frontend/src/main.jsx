import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import NewMember from "./pages/NewMember";
import Admin from "./pages/Admin";
import SelectAMA from "./pages/SelectAMA";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/profile", element: <Profile /> },
  { path: "/new-member", element: <NewMember /> },
  { path: "/admin", element: <Admin /> },
  { path: "/select", element: <SelectAMA />}

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);