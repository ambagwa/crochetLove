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

export const ProductCard = ({ product }) => {
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
    <Card className="group relative mx-auto w-full max-w-sm overflow-hidden border-none shadow-md">
      {/** Image container */}
      <div className="relative aspect-video w-full overflow-hidden">
        {/** Stars overlay */}
        <div className="absolute top-3 right-3 z-40">
          <Badge className="flex items-center gap-1 bg-white/90 backdrop-blur-sm">
            {renderStars(product.stars)}
          </Badge>
        </div>

        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <CardHeader className="pt-4">
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
        <div className="mt-2 flex gap-2">
          <Badge className="bg-orange-300">Most liked</Badge>
          <Badge className="bg-orange-300">Summer</Badge>
        </div>
      </CardHeader>

      <CardFooter className="flex items-center justify-between">
        <span className="text-lg font-bold text-orange-500">
          {product.price}
        </span>
        <Button size="sm" variant="orange">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
};
