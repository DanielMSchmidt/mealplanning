import * as React from "react";
import { useNavigate } from "react-router-dom";
import { createCookbook } from "../api";

export const CreateCookbook = () => {
  const navigate = useNavigate();
  const [title, setTitle] = React.useState<string>("");
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-md w-full space-y-8"
        data-v0-t="card"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createCookbook({ title }).then(
              () => {
                navigate(-1); // go back
              },
              (err) => console.error(err)
            );
          }}
        >
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="text-center">
              <h3 className="tracking-tight mt-6 text-center text-3xl font-extrabold text-gray-900">
                Create Cookbook
              </h3>
            </div>
          </div>

          <div className="p-6 mt-8 space-y-6">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="h-10 bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="title"
                placeholder="My Cookbook"
                required
                type="string"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center p-6">
            <button className="items-center ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Create Cookbook
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};
