import * as React from "react";
import { Header } from "./header";
import { Outlet } from "react-router-dom";
import { RequireAuth } from "../auth";

export const AppFrame = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {children}
    </main>
  </>
);

export const AppFrameRoute = () => (
  <AppFrame>
    <Outlet />
  </AppFrame>
);

export const AppFrameRouteWithAuth = () => (
  <RequireAuth>
    <AppFrameRoute />
  </RequireAuth>
);
