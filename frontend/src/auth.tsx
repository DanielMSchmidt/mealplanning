import * as React from "react";
import { Navigate, useLocation } from "react-router";
// A simple login API that authenticates a user and saves the token in
// local storage. It provides methods for login, logout, and checking if the
// user is logged in. It also provides a method to get the token for API calls.

export const login = (username: string, token: string) => {
  localStorage.setItem("token", token);
  localStorage.setItem("username", username);
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const isLoggedIn = () => {
  return localStorage.getItem("token") !== null;
};

export const getUsername = () => {
  return localStorage.getItem("username");
};

export const getToken = () => {
  return localStorage.getItem("token");
};

// Function for the router
export function RequireAuth({ children }: { children?: JSX.Element }) {
  const location = useLocation();

  if (!isLoggedIn()) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>children</>;
}
