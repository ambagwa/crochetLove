import React from "react";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Star } from "lucide-react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import * as motion from "motion/react-client"

export const ProductCard = ({ product }) => {
  const [addFavorite, setAddFavorite] = useState(false);

  const handleAddFavorite = () => {
    setAddFavorite((prevState) => !prevState);
  };

  // Helper to render stars based on the number
  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={
          i < count ? "fill-yellow-400 text-yellow-400" : "text-gray-400 "
        }
      />
    ));
  };
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
      }}
      transition={{ type: "tween", stiffness: 100 }}
    >
      <Card className="w-full group relative hover:cursor-pointer max-w-none overflow-hidden shadow-md">
        {/** Image container */}
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          {/** Stars overlay */}
          <div className="absolute top-3 right-3 z-40">
            <Badge className="flex items-center gap-1 bg-white/90 backdrop-blur-sm">
              {renderStars(product.stars)}
            </Badge>
          </div>

          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <CardHeader className="pt-4">
          <CardTitle>{product.name}</CardTitle>
          <CardDescription className="hidden md:block">
            {product.description}
          </CardDescription>
          <div className="mt-2 flex gap-2 hidden md:block">
            <Badge className="bg-orange-300">Most liked</Badge>
            <Badge className="bg-orange-300">Summer</Badge>
          </div>
        </CardHeader>

        <CardFooter className="flex flex-col flex-start">
          <span className="text-sm sm:text-lg font-bold text-orange-500 ms-0 w-full">
            Sh. {product.price}
          </span>
          <div className="flex justify-between w-full mt-5 hidden md:block">
            <Button size="sm" variant="orange">
              Add to Cart
            </Button>
            <Button size="sm" variant="ghost" onClick={handleAddFavorite}>
              {addFavorite ? (
                <FaHeart className="size-5" />
              ) : (
                <CiHeart className="size-6" />
              )}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
