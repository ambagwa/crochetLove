import * as React from "react";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import image1 from "../../assets/images/crochet_image_1.jfif";
import image2 from "../../assets/images/crochet_image_2.jfif";
import image3 from "../../assets/images/crochet_image_3.jfif";
import image4 from "../../assets/images/crochet_image_4.jfif";
import image5 from "../../assets/images/crochet_image_5.jfif";

export const ItemsCarousel = () => {
  const images = [image1, image2, image3, image4, image5];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-5xl mx-auto mt-12"
    >
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index} className="basis-1/1 sm:basis-1/3">
            <div className="p-1">
              <Card className="relative mx-auto w-full max-w-sm pt-0">
                <div className="absolute inset-0 z-30 aspect-video" />
                <img
                  src={img}
                  alt={`Product ${index + 1}`}
                  className="rounded-t-xl relative z-20 aspect-video w-full object-cover brightness-100  dark:brightness-40"
                />
                <CardHeader>
                  <CardAction>
                    <Badge variant="orange" className="bg-orange-300">Featured</Badge>
                  </CardAction>
                  <CardTitle>Potluck Goodies</CardTitle>
                  <CardDescription>
                    Food will not be the only thing getting attention
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
