import * as React from "react";
import * as api from "../api";
import { ActionFunction, useActionData } from "react-router-dom";

type ActionResponse = {
  email?: string;
  password?: string;
};

// A simple login page that allows users to login to the app.
// It's a simple form with a username and password field.
export function Login() {
  const errors = useActionData() as ActionResponse;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
        margin: "auto",
      }}
    >
      <h1>Login</h1>
      <form method="post" action="/login">
        <label>email:</label>
        <input type="text" name="email" />
        {errors?.email && <span>{errors.email}</span>}
        <br />
        <label>Password:</label>
        <input type="password" name="password" />
        {errors?.password && <span>{errors.password}</span>}
        <p>
          <button type="submit">Login</button>
        </p>
      </form>
    </div>
  );
}

export const loginAction: ActionFunction = async ({
  request,
}): Promise<ActionResponse> => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  const errors: Record<string, string> = {};
  if (!email) {
    errors["email"] = "Email is required.";
  }

  if (!password) {
    errors["password"] = "Password is required.";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  try {
    await api.login(email!, password!);
    return {};
  } catch (e) {
    errors["password"] = "Invalid email or password.";
    return errors;
  }
};
