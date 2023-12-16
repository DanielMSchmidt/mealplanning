import * as React from "react";
import { Button } from "../components/button";

export function Home() {
  return (
    <>
      <section>
        <h2 className="text-lg font-semibold mb-4">Your Meal Plan</h2>
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm p-4"
          data-v0-t="card"
        >
          <div className="flex-col space-y-1.5 p-6 flex justify-between items-center pb-2">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              Week of Dec 16
            </h3>
            <Button>Regenerate Plan</Button>
          </div>
          <div className="p-6 grid gap-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Monday: Spaghetti Bolognese</span>
              <Button>Regenerate</Button>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Tuesday: Vegetable Stir Fry</span>
              <Button>Regenerate</Button>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">
                Wednesday: Chicken Caesar Salad
              </span>
              <Button>Regenerate</Button>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Thursday: Beef Tacos</span>
              <Button>Regenerate</Button>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Friday: Margherita Pizza</span>
              <Button>Regenerate</Button>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Saturday: Grilled Salmon</span>
              <Button>Regenerate</Button>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Sunday: Vegetable Paella</span>
              <Button>Regenerate</Button>
            </div>
          </div>
        </div>
      </section>
      <section>
        {/* Heading and button are on the same line, but the button is on the right */}

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold ">Your Cookbooks</h2>
          <Button className="float-right">New Cookbook</Button>
        </div>

        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm p-4"
          data-v0-t="card"
        >
          <div className="flex flex-col space-y-1.5 p-6 pb-2">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              Favorites
            </h3>
          </div>
          <div className="p-6 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <span className="font-medium">Vegetarian Delights</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Healthy Breakfasts</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Quick &amp; Easy Dinners</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Low Carb Recipes</span>
            </div>
          </div>
          <a className="text-blue-500 text-sm mt-4" href="#">
            View All
          </a>
        </div>
      </section>
      <section className="col-span-full md:col-span-1">
        <h2 className="text-lg font-semibold mb-4">Shared Cookbooks</h2>
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm p-4"
          data-v0-t="card"
        >
          <div className="flex flex-col space-y-1.5 p-6 pb-2">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              From Friends
            </h3>
          </div>
          <div className="p-6 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <span className="font-medium">Italian Classics</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Baking Basics</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Summer Grilling</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Vegan Comfort Food</span>
            </div>
          </div>
          <a className="text-blue-500 text-sm mt-4" href="#">
            View All
          </a>
        </div>
      </section>
    </>
  );
}
