import { RouteObject } from "react-router-dom";
import { Landing } from "./pages/landing";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { AppFrameRouteWithAuth } from "./components/appFrame";

export const routes: RouteObject[] = [
  { path: "/", element: <Landing /> },
  {
    path: "/login",
    element: <Login />,
  },
  //   { path: "/register", element: <Register /> },
  {
    path: "/home",
    element: <AppFrameRouteWithAuth />,
    children: [{ index: true, element: <Home /> }],
  },
];
