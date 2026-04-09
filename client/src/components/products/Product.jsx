import React from "react";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Button } from "../ui/button";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../assets/products";

export const Product = () => {
  const [count, setCount] = useState(1);
  const [clickFavorite, setClickFavorite] = useState(false);
  const { id } = useParams();

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    setCount(count - 1);
  };

  const handleClickFavorite = () => {
    setClickFavorite((prev) => !prev);
  };

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <div>Product Not Found</div>;

  return (
    <>
      <div className="flex flex-col md:flex-row mt-4 mx-4 lg:mx-40">

        {/** Left section */}
        <div className="flex mb-5 flex-col">

          {/** Image */}
          <div className="bg-transparent  w-full">
            <img
              src={product.src}
              alt={product.name}
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
            />
          </div>

          {/**Image carousel */}
          <div className="mx-auto w-3/4 mt-2">
            <Carousel opts={{ align: "start" }} className="w-full">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/4 sm:basis-1/5 md:basis-1/6"
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-2">
                          <span className="text-sm font-semibold">
                            <img
                              src={product.src}
                              alt={product.name}
                              className="w-full object-fill"
                            />
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        {/** Right section */}
        <div className="mx-1 mt-3">

          {/** top row */}
          <div className="flex gap-2 justify-between">
            <div>
              <p className="text-3xl md:text-4xl font-bold">
                {product.name}
              </p>
            </div>
            
            <div>
              <Button variant="ghost" onClick={handleClickFavorite}>
                {clickFavorite ? (
                  <MdFavorite className="size-10" />
                ) : (
                  <MdFavoriteBorder className="size-10" />
                )}
              </Button>
            </div>
          </div>

          {/** Description and price row */}
          <div className="mt-2">
            <p className="font-normal text-xl">{product.description}</p>
            <p className="mt-5 text-3xl font-bold text-orange">
              <span className="italic">sh.</span> {product.price}
            </p>
          </div>

          {/** Add to Cart row */}
          <div className="mt-15 flex gap-8">
            <div className="border px-2 flex border-black gap-3 rounded">
              <button
                onClick={handleSubtract}
                className="p-2 text-3xl font-medium"
              >
                -
              </button>
              <div className="p-2 text-3xl font-medium">{count}</div>
              <button onClick={handleAdd} className="p-2 text-3xl font-medium">
                +
              </button>
            </div>
            <div>
              <Button variant="orange" className="p-6 text-2xl">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
