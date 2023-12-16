import { RouteObject } from "react-router-dom";
import { RequireAuth } from "./auth";
import { Landing } from "./pages/landing";
import { Login } from "./pages/login";
import { Home } from "./pages/home";

export const routes: RouteObject[] = [
  { path: "/", element: <Landing /> },
  {
    path: "/login",
    element: <Login />,
  },
  //   { path: "/register", element: <Register /> },
  {
    path: "/home",
    element: <RequireAuth />,
    children: [{ path: "/home/dashboard", element: <Home /> }],
  },
];
