import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Button } from "../ui/button";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FieldDescription } from "../ui/field";
import { ProductImageGallery } from "./ProductImageGallery";
import Footer from "../sections/footer/Footer";
import { useFetch } from "@/hooks/useFetch";
import { BASE_URL } from "@/services/api";
import { useFavorites } from "@/hooks/useFavorites";

export const Product = () => {
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const { data, error, loading } = useFetch(`/products/fetchProduct/${id}`);

  const product = data?.product;

  const { favIds, toggle } = useFavorites();

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    setCount(count - 1);
  };

  if (loading) return <p className="text-center mt-5">Loading...</p>;
  if (error || !product)
    return <p className="text-center mt-5">Product not found</p>;

  // Check if product is on the list
  const isFavorite = favIds.has(product._id);

  // Convert image IDs to full URLs
  const imageUrls =
    product.images?.map((imgId) => `${BASE_URL}/api/images/${imgId}`) || [];

  const mainImage =
    imageUrls[0] || "https://via.placeholder.com/400x500?text=No+Image";

  return (
    <>
      <div className="flex flex-col lg:flex-row mt-4 mx-4 gap-10 mt-10 lg:mx-40">
        {/** Left section */}
        <div className="flex w-full mb-5 flex-col">
          {/** Image */}
          <ProductImageGallery mainImage={mainImage} images={imageUrls} />
        </div>

        {/** Right section */}
        <div className="mx-1 w-full mt-3">
          {/** top row */}
          <div className="flex gap-2 justify-between">
            <div>
              <p className="text-3xl md:text-4xl font-bold">{product.name}</p>
            </div>

            <div>
              <Button variant="ghost" onClick={() => toggle(product._id)}>
                {isFavorite ? (
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
            {/**Quantity */}
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

            {/**Add to cart button */}
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
