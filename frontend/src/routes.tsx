import { RouteObject } from "react-router-dom";
import { RequireAuth } from "./auth";
import { Landing } from "./pages/landing";
import { Login, loginAction } from "./pages/login";
import { Home } from "./pages/home";

export const routes: RouteObject[] = [
  { path: "/", element: <Landing /> },
  {
    path: "/login",
    element: <Login />,
    action: loginAction,
  },
  //   { path: "/register", element: <Register /> },
  {
    element: <RequireAuth />,
    children: [{ path: "/", element: <Home /> }],
  },
];
