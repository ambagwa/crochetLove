import { TbXboxX } from "react-icons/tb";
import image from "../../assets/images/artist-face.jfif";
import { Button } from "../ui/button";

export const ShoppingCart = () => {
  const products = [
    { id: 1, image: image, title: "Glock on me", price: 564 },
    { id: 3, image: image, title: "Shack Dat", price: 988 },
    { id: 2, image: image, title: "Prime Bag", price: 286 },
  ];
  return (
    <div className="p-10 bg-red-100 min-h-screen">
      {/** Header */}
      <div className="flex justify-between">
        <h1 className="font-medium text-2xl">Shopping Cart</h1>
        <TbXboxX className="text-3xl" />
      </div>

      {/**Products container */}
      <div className="my-3">
        {products.map((p) => (
          <div
            className="grid grid-cols-3 sm:grid-cols-4 gap-2 my-2"
            key={p.id}
          >
            {/* Image */}
            <div className="my-2">
              <img
                src={p.image}
                alt="Product"
                className="w-20 h-auto rounded-lg"
              />
            </div>

            {/* Title, buttons and price on mobile */}
            <div className="col-span-2 sm:col-span-2 gap-2 flex flex-col">
              <div className="p-2">
                <p className="font-medium">{p.title}</p>
              </div>

              {/* Buttons */}
              <div className="p-2 -my-2">
                <div className="flex gap-2 items-center">
                  <div className="border px-2 flex border-orange rounded">
                    <button className="p-2 text-xl font-medium">-</button>
                    <div className="p-2 text-xl font-medium">1</div>
                    <button className="p-2 text-xl font-medium">+</button>
                  </div>
                  <Button
                    variant="ghost"
                    className="px-2 py-4 text-2xl text-orange"
                  >
                    remove
                  </Button>
                </div>
              </div>

              {/* Price — visible only on mobile */}
              <div className="p-2 sm:hidden">
                <p className="text-2xl font-bold">sh. {p.price}</p>
              </div>
            </div>

            {/* Price — visible only on sm and above */}
            <div className="hidden sm:block p-2">
              <p className="text-2xl font-bold">sh. {p.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/**Sub total container */}
      <div className="fixed bottom-0 left-0 right-0 bg-red-200 p-4 shadow-lg">
        <div className="flex justify-between">
          <p className="text-2xl opacity-50">Subtotal</p>
          <p className="text-2xl font-medium">sh. 3000</p>
        </div>
        <Button
          variant="orange"
          className="w-full my-2 text-xl sm:text-3xl font-medium"
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};
