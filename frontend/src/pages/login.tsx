import * as React from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../api";

type Errors = {
  email?: string;
  password?: string;
};

// A simple login page that allows users to login to the app.
// It's a simple form with a username and password field.
export function Login() {
  const navigate = useNavigate();
  const [errors, setErrors] = React.useState<Errors>({});
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-md w-full space-y-8"
        data-v0-t="card"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginAction({ email, password }).then(
              (errors) => {
                if (Object.keys(errors).length === 0) {
                  navigate("/home");
                } else {
                  setErrors(errors);
                }
              },
              (err) => console.error(err)
            );
          }}
        >
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="text-center">
              <h3 className="tracking-tight mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h3>
            </div>
          </div>

          <div className="p-6 mt-8 space-y-6">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="h-10 bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="email"
                placeholder="mealplanner@example.com"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email ? (
                <p className="text-sm text-red-500">{errors.email}</p>
              ) : null}
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="h-10 bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="password"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password ? (
                <p className="text-sm text-red-500">{errors.password}</p>
              ) : null}
            </div>
          </div>
          <div className="flex items-center p-6">
            <button className="items-center ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export const loginAction = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<Errors> => {
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
