import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import CardProduct from "../components/CardProduct";
export default function CategoryPage() {
  const products = [
    { id: 1, name: "Butterfly", category: "Big", price: 75.0 },
    { id: 2, name: "Butterfly", category: "Medium", price: 50.0 },
    { id: 3, name: "Butterfly", category: "Small", price: 30.0 },
    { id: 4, name: "Crystal Rose", color: "Red", price: 30.0 },
    { id: 5, name: "Crystal Rose", color: "Black", price: 30.0 },
    { id: 6, name: "Crystal Rose", color: "Pink", price: 30.0 },
  ];
  return (
    <section className="mt-10 py-20 flex flex-col justify-center">
      <div>
        <Typography variant="h1" className="text-center font-medium">
          <span className="font-semibold text-green-400">Les's </span> Get to{" "}
          <span className="font-semibold text-green-400">Finding </span> our
          Products!
        </Typography>
      </div>

      <div className="mx-auto max-w-screen-xl ">
        <div>
          <CardProduct products={products} />
        </div>
      </div>
    </section>
  );
}
