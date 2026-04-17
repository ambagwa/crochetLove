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
import { products } from "../../assets/data/products";
import { FieldDescription } from "../ui/field";
import { ProductImageGallery } from "./ProductImageGallery";
import Footer from "../sections/footer/Footer";

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
      <div className="flex flex-col lg:flex-row mt-4 mx-4 gap-10 mt-10 lg:mx-40">
        
        {/** Left section */}
        <div className="flex w-full mb-5 flex-col">
          {/** Image */}
          <ProductImageGallery images={product.images} />
        </div>

        {/** Right section */}
        <div className="mx-1 w-full mt-3">
          {/** top row */}
          <div className="flex gap-2 justify-between">
            <div>
              <p className="text-3xl md:text-4xl font-bold">{product.name}</p>
            </div>

            <div>
              <Button variant="ghost" onClick={handleClickFavorite}>
                {clickFavorite ? (
                  <MdFavorite className="size-8 text-orange-700" />
                ) : (
                  <MdFavoriteBorder className="size-8 text-orange-700" />
                )}
              </Button>
            </div>
          </div>

          {/** Description and price row */}
          <div className="mt-2">
            <FieldDescription className="font-normal text-xl">
              {product.description}
            </FieldDescription>
            <p className="mt-5 text-3xl font-bold text-orange">
              <span className="italic">sh.</span> {product.price}
            </p>
          </div>

          {/** Add to Cart row */}
          <div className="mt-15 flex gap-8">
            <div className="border px-2 flex border-orange gap-3 rounded">
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

      
      <Footer />
    </>
  );
};
