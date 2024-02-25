import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";

const CardProduct = ({ products }) => {
  const [selectedName, setSelectedName] = useState(null);

  const filterProductsByName = (brand) => {
    setSelectedName(brand);
  };
  const filteredProducts = selectedName
    ? products.filter((product) => product.name === selectedName)
    : products;

  return (
    <section className="">
      <div className="flex justify-center gap-x-5 mb-5 mt-2">
        <button
          className="border-green-200 border p-3 focus:border-green-600 focus:ring focus:ring-green-600 active:border-green-600 hover:border-green-500 rounded-full"
          onClick={() => filterProductsByName("Butterfly")}
        >
          Butterfly
        </button>
        <button
          className="border-green-200 border p-3 focus:border-green-600 focus:ring focus:ring-green-600 active:border-green-600 hover:border-green-500 rounded-full"
          onClick={() => filterProductsByName("Crystal Rose")}
        >
          Crystal Rose
        </button>
      </div>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <Card className="w-full max-w-[26rem] shadow-lg" key={product.id}>
            <CardHeader floated={false} color="blue-gray">
              <img
                src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="ui/ux review check"
              />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex items-center justify-between">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-medium"
                >
                  {product.name}
                </Typography>
              </div>
              {product.category && (
                <Typography color="gray">
                  Category: {product.category}
                </Typography>
              )}
              {product.color && (
                <Typography color="gray">color: {product.color}</Typography>
              )}
            </CardBody>
            <CardFooter className="pt-3">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CardProduct;
