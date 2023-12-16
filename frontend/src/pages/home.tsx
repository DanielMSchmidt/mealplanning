import * as React from "react";

export function Home() {
  return (
    <>
      <header className="flex items-center justify-between p-6 bg-pink-100 shadow-md rounded-lg">
        <div className="flex items-center gap-4">
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
            className="h-6 w-6"
          >
            <path d="M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2"></path>
            <path d="M18 6h.01"></path>
            <path d="M6 18h.01"></path>
            <path d="M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z"></path>
            <path d="M18 11.66V22a4 4 0 0 0 4-4V6"></path>
          </svg>
          <h1 className="text-2xl font-bold text-pink-600">Meal Planner</h1>
        </div>
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 text-pink-600">
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
            className="h-4 w-4"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </button>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <section>
          <h2 className="text-lg font-semibold mb-4 text-pink-600">
            Your Meal Plan
          </h2>
          <div
            className="border text-card-foreground p-4 bg-pink-50 rounded-lg shadow-lg"
            data-v0-t="card"
          >
            <div className="flex-col space-y-1.5 p-6 flex justify-between items-center pb-2">
              <h3 className="text-2xl font-semibold leading-none tracking-tight text-pink-600">
                Week of Dec 16
              </h3>
              <button className="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 text-sm bg-pink-200 text-pink-700">
                Regenerate Plan
              </button>
            </div>
            <div className="p-6 grid gap-4"></div>
          </div>
        </section>
        <section>
          <h2 className="text-lg font-semibold mb-4 text-pink-600">
            Your Cookbooks
          </h2>
          <div
            className="border text-card-foreground p-4 bg-pink-50 rounded-lg shadow-lg"
            data-v0-t="card"
          >
            <div className="flex flex-col space-y-1.5 p-6 pb-2">
              <h3 className="text-2xl font-semibold leading-none tracking-tight text-pink-600">
                Favorites
              </h3>
            </div>
            <div className="p-6 grid grid-cols-2 gap-4"></div>
            <a className="text-pink-500 text-sm mt-4" href="#">
              View All
            </a>
          </div>
        </section>
        <section className="col-span-full md:col-span-1">
          <h2 className="text-lg font-semibold mb-4 text-pink-600">
            Shared Cookbooks
          </h2>
          <div
            className="border text-card-foreground p-4 bg-pink-50 rounded-lg shadow-lg"
            data-v0-t="card"
          >
            <div className="flex flex-col space-y-1.5 p-6 pb-2">
              <h3 className="text-2xl font-semibold leading-none tracking-tight text-pink-600">
                From Friends
              </h3>
            </div>
            <div className="p-6 grid grid-cols-2 gap-4"></div>
            <a className="text-pink-500 text-sm mt-4" href="#">
              View All
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
