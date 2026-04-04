import { Link } from "react-router-dom";

const Column2 = () => {
  return (
    <div className="py-2 text-2xl">
      <Link to="/" className="block my-2 text-xl">
        Home
      </Link>
      <Link to="/products" className="block my-2 text-xl">
        Shop All Products
      </Link>
      <Link to="/custom_orders" className="block my-2 text-xl">
        Custom orders
      </Link>
    </div>
  );
};

export default Column2;
