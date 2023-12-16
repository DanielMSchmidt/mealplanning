import * as React from "react";

// A landing page for the meal planner app. This is the first page that users see.

export function Landing() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="h-20 flex items-center justify-between px-4 md:px-6">
          <a className="flex items-center justify-center" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
              <path d="M10 2c1 .5 2 2 2 5"></path>
            </svg>
            <span className="ml-2 text-xl font-semibold">MealPlan</span>
          </a>
          <nav className="flex gap-4">
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              About
            </a>
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Pricing
            </a>
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Contact
            </a>
          </nav>
          <div className="flex gap-2">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Log in
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Register
            </button>
          </div>
        </header>
        <main className="flex-1">
          <section className="w-full py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                <img
                  src="/food.jpg"
                  alt="Healthy food"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                  width="500"
                  height="500"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                      Plan Healthy &amp; Delicious Meals with Ease
                    </h1>
                    <p className="max-w-lg text-gray-500 md:text-lg dark:text-gray-400">
                      Discover new recipes, plan your meals, build a shopping
                      list and track your nutrition all in one place.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <a
                      className="inline-flex h-10 items-center justify-center rounded-md bg-green-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-700 disabled:pointer-events-none disabled:opacity-50"
                      href="/register"
                    >
                      Register Now
                    </a>
                    <a
                      className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                      href="/login"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-24 lg:py-32 xl:py-48 bg-gray-100 dark:bg-gray-900">
            <div className="container px-4 md:px-6">
              <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-5xl text-center">
                How It Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <div className="flex flex-col space-y-1.5 p-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 mb-2"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                    </svg>
                    <h3 className="text-xl font-bold">Discover Recipes</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-500">
                      Search through thousands of recipes and find the ones that
                      suit your dietary needs and preferences.
                    </p>
                  </div>
                </div>
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <div className="flex flex-col space-y-1.5 p-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 mb-2"
                    >
                      <rect
                        width="18"
                        height="18"
                        x="3"
                        y="4"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" x2="16" y1="2" y2="6"></line>
                      <line x1="8" x2="8" y1="2" y2="6"></line>
                      <line x1="3" x2="21" y1="10" y2="10"></line>
                    </svg>
                    <h3 className="text-xl font-bold">Plan Your Meals</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-500">
                      Create a meal plan for the week or month and never worry
                      about what to cook again.
                    </p>
                  </div>
                </div>
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <div className="flex flex-col space-y-1.5 p-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 mb-2"
                    >
                      <circle cx="8" cy="21" r="1"></circle>
                      <circle cx="19" cy="21" r="1"></circle>
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                    </svg>
                    <h3 className="text-xl font-bold">Shop Efficiently</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-500">
                      Generate a shopping list based on your meal plan and buy
                      exactly what you need.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="h-20 flex items-center justify-between border-t px-4 md:px-6">
          <p className="text-sm text-gray-500">
            © MealPlan. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <a className="text-sm hover:underline underline-offset-4" href="#">
              Privacy Policy
            </a>
          </nav>
        </footer>
      </div>
    </>
  );
}
