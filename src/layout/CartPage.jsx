import { Button, Spinner } from "@material-tailwind/react";
import React, { useState } from "react";
export default function CartPage() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-2xl font-bold my-4">Shopping Cart</h1>
        <Button
          size="sm"
          onClick={handleClick}
          disabled={loading}
          className="font-bold py-2 px-8"
        >
          {loading ? <Spinner className="h-4 w-16" /> : "Checkout"}
        </Button>
      </div>
      <div className="mt-8">
        <div className="flex flex-col md:flex-row border-b border-gray-400 py-4">
          <div className="flex-shrink-0">
            <img
              src="https://picsum.photos/id/237/150/150"
              alt="Product image"
              className="w-32 h-32 object-cover"
            />
          </div>
          <div className="mt-4 md:mt-0 md:ml-6">
            <h2 className="text-lg font-bold">Product Title</h2>
            <p className="mt-2 text-gray-600">Product Description</p>
            <div className="mt-4 flex items-center">
              <span className="mr-2 text-gray-600">Quantity:</span>
              <div className="flex items-center">
                <button className="bg-gray-200 rounded-l-lg px-2 py-1">
                  -
                </button>
                <span className="mx-2 text-gray-600">1</span>
                <button className="bg-gray-200 rounded-r-lg px-2 py-1">
                  +
                </button>
              </div>
              <span className="ml-auto font-bold">$15.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center mt-8">
        <span className="text-gray-600 mr-4">Subtotal:</span>
        <span className="text-xl font-bold">$35.00</span>
      </div>
    </div>
  );
}
