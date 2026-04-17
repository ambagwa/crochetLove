import { div, img } from "motion/react-client";
import React from "react";
import { useState } from "react";

export const ProductImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full">
        {/** Main image */}
        <img
          src={selectedImage}
          alt="product"
          onClick={() => setIsOpen(true)}
          className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg cursor-pointer"
        />

        {/** Thumbnail carousel */}
        <div className="flex gap-2 mt-3 overflow-x-auto">
          {images.map((image, index) => (
            <img
              src={image}
              key={index}
              className={`h-20 w-20 object-cover rounded blur-xs border ${
                selectedImage === image ? "border-orange" : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      {/** Modal preview container */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50">
          {/**Close button */}
          <button
            className="absolute top-5 right-5 text-white text-3xl cursor-pointer hover:text-orange"
            onClick={() => setIsOpen(false)}
          >
            X
          </button>

          {/** Main preview image */}
          <img
            src={selectedImage}
            alt="preview"
            className="max-h-140 w-auto rounded-lg"
          />

          {/** Carousel inside modal */}
          <div className="flex gap-3 mt-5 ooverflow-x-auto px-4">
            {images.map((image, index) => (
              <img
                src={image}
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`h-20 w-20 object-cover rounded cursor-pointer border ${
                  selectedImage === image
                    ? "border-orange"
                    : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
