import image from "../../assets/images/artist-face.jfif";

export const CartSummary = () => {
  const products = [
    { id: 1, image: image, title: "Glock on me", price: 564 },
    { id: 3, image: image, title: "Shack Dat", price: 988 },
    { id: 2, image: image, title: "Prime Bag", price: 286 },
  ];

  return (
    <>
      <div className="sm:w-2/5 sm:mt-5">
        <h2 className="font-medium text-3xl mb-7">Cart Summary</h2>

        {/**Items Display */}
        <div className="flex flex-col gap-2">
          {products.map((p) => (
            <div className="flex gap-5 items-center" key={p.id}>
              <img
                src={p.image}
                alt="Product"
                className="w-20 h-auto rounded-lg"
              />

              <div className="flex flex-col">
                <p className="text-2xl font-medium ">{p.title}</p>
                <p className="font-medium">
                  {p.price} * {p.id}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/**divider */}
        <div className="w-full p-[1px] my-7 bg-gray-200"></div>

        {/**Price details */}
        <div className="flex flex-col">
          <div className="flex flex-row justify-between mb-2">
            <p className="text-2xl">Subtotal</p>
            <p className="text-xl font-medium">Ksh. 3100.00</p>
          </div>
          <div className="flex flex-row justify-between mb-2">
            <p className="text-2xl">Subtotal</p>
            <p className="text-xl text-blue-500 font-medium">Apply Coupon</p>
          </div>
          <div className="flex flex-row justify-between mb-2">
            <p className="text-2xl">Delivery charges</p>
            <p className="text-xl font-medium">Ksh. 0.00</p>
          </div>
        </div>

        {/**divider */}
        <div className="w-full p-[1px] my-7 bg-gray-200"></div>

        <div className="flex flex-row justify-between mb-2">
          <p className="text-2xl font-medium">Grand Total</p>
          <p className="text-xl font-medium">Ksh. 0.00</p>
        </div>
      </div>
    </>
  );
};
