import { TbXboxX } from "react-icons/tb";
import image from "../../assets/images/artist-face.jfif";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export const ShoppingCart = ({ isOpen, onClose }) => {
  const products = [
    { id: 1, image: image, title: "Glock on me", price: 564 },
    { id: 3, image: image, title: "Shack Dat", price: 988 },
    { id: 2, image: image, title: "Prime Bag", price: 286 },
  ];

  // Lock background scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    //Clean up on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/**Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/**Sliding drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white sm:w-[500px] z-50 shadow-xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/** Header */}
        <div className="flex justify-between p-4">
          <h1 className="font-medium text-2xl">Shopping Cart</h1>

          {/** Close button */}
          <TbXboxX className="text-3xl hover:text-orange" onClick={onClose} />
        </div>

        {/**Products container */}
        <div className="flex-1 overflow-y-auto px-6 pb-4">
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
        <div className="fixed bottom-0 left-0 right-0 p-4 mb-4 shadow-lg">
          <div className="flex justify-between mb-4">
            <p className="text-2xl opacity-880">Subtotal</p>
            <p className="text-2xl font-medium">sh. 3000</p>
          </div>

          {/** Buttons */}
          <div className="flex flex-col text-center">
            <NavLink
              to="login"
              onClick={onClose}
              className="w-full rounded-lg bg-orange-300 p-2 text-lg sm:text-xl font-medium hover:text-white hover:bg-orange-400"
            >
              Proceed to Checkout
            </NavLink>
            <NavLink
              onClick={onClose}
              className="w-full my-2 text-lg rounded-lg sm:text-xl font-medium hover:bg-orange-100 p-2"
            >
              View cart
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
