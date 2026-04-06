import React from "react";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MdFavoriteBorder } from "react-icons/md";
import { Button } from "../ui/button";
import { useState } from "react";

export const Product = () => {
    const [count, setCount] = useState(1);
  const products = [
    {
      id: 1324,
      name: "Miami vest",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora fuga quidem impedit pariatur saepe dolorum illum et, a adipisci, nobis possimus sit. Eius odio provident ea, aliquam soluta dicta omnis.",
      price: 625,
      src: "https://www.brogueshop.com/cdn/shop/files/DSCF1735.jpg?v=1693697126",
    },
  ];
  return (
    <>
      <div className="bg-red-100 flex flex-col md:flex-row mt-4 mx-4 lg:mx-40">
        {/** Left section */}
        <div className="flex flex-col">
          {/** Image */}
          <div className="bg-transparent  w-full">
            <img
              src={products[0].src}
              alt={products[0].name}
              className="object-cover"
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
                              src="https://www.brogueshop.com/cdn/shop/files/DSCF1735.jpg?v=1693697126"
                              alt={products[0].name}
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
                {products[0].name}
              </p>
            </div>
            <div>
              <Button variant="ghost">
                <MdFavoriteBorder className="size-10" />
              </Button>
            </div>
          </div>

          {/** Description and price row */}
          <div className="mt-2">
            <p className="font-normal text-xl">{products[0].description}</p>
            <p className="mt-1 text-3xl font-bold text-orange">
              <span className="italic">sh.</span> {products[0].price}
            </p>
          </div>

          {/** Add to Cart row */}
          <div className="mt-5 flex gap-8">
            <div className="border px-2 flex border-black gap-3 rounded">
                  <div className="p-2 text-3xl font-medium">-</div>
                  <div className="p-2 text-3xl font-medium">{count}</div>
                  <div className="p-2 text-3xl font-medium">+</div>
            </div>
            <div>
                <Button variant="orange" className="p-6 text-2xl">Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
