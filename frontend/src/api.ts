import React from "react";
import { login as localLogin, getToken } from "./auth";

const apiUrl = () => {
  return process.env.NODE_ENV === "production"
    ? window.location.origin
    : "http://localhost:3000";
};

export const login = async (email: string, password: string) => {
  const response = await fetch(`${apiUrl()}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then((res) => res.json());

  if (!response.token) throw new Error("Invalid response, missing token");
  if (!response.name) throw new Error("Invalid response, missing name");

  localLogin(response.name, response.token);
};

async function authenticatedRequest<T>(
  url: string,
  opts: RequestInit
): Promise<T> {
  const token = getToken();
  if (!token) {
    console.error("No token saved, could not request", url);
  }

  const response = await fetch(`${apiUrl()}/${url}`, {
    ...opts,
    headers: {
      ...opts.headers,
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(async (res) => {
    const result = await res.json();
    console.info(`${opts.method || "GET"} /${url}`, result);
    if (result.error) {
      throw result.error;
    }
    return result;
  });
  return response as T;
}

export type Cookbook = {
  title: string;
};
export function getCookbooks() {
  return authenticatedRequest<Cookbook[]>("cookbooks", {
    method: "GET",
  });
}

export const useCookbooks = () => {
  const [cookbooks, setCookbooks] = React.useState<Cookbook[]>([]);

  React.useEffect(() => {
    getCookbooks().then(setCookbooks);
  }, []);

  return cookbooks;
};

export const createCookbook = (body: { title: string }) => {
  return authenticatedRequest<void>("cookbooks", {
    method: "POST",
    body: JSON.stringify(body),
  });
};
