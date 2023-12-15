import { login as localLogin } from "./auth";

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
