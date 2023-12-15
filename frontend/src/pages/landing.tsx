import * as React from "react";

// A landing page for the meal planner app. This is the first page that users see.

export function Landing() {
  return (
    <div>
      <h1>Welcome to the Meal Planner!</h1>
      <p>
        This is a simple meal planner app that allows you to plan out your meals
        for the week.
      </p>

      <p>
        <a href="/login">Login</a> to get started.
      </p>
    </div>
  );
}
