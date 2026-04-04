import {
  Navigate,
  NavLink as RouterNavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/logo.svg";

const NavLink = ({ children, to, onClick }) => {
  return (
    <RouterNavLink
      to={to}
      onClick={onClick}
      className={({
        isActive,
      }) => `px-2 py-3 sm:py-0 relative block sm:inline-block transition-colors duration-300 
            ${isActive ? "text-orange" : "hover:text-orange"}
            after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0
            after:h-[2px] after:bg-orange
            after:transition-all after:duration-300
            ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}
    >
      {children}
    </RouterNavLink>
  );
};

const NavIconLink = ({ children, to }) => {
  return (
    <RouterNavLink to={to}>
      {({ isActive }) => (
        <div
          className={`px-2 transition-colors duration-300 
        ${isActive ? "text-orange" : "text-gray-500 hover:text-orange"}`}
        >
          <div
            className={`size-6 stroke-current transition-all duration-300
          ${isActive ? "fill-orange scale-110" : "fill-none group-hover:fill-orange"}
        `}
          >
            {children}
          </div>
        </div>
      )}
    </RouterNavLink>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Products", to: "/products" },
    { name: "Custom Orders", to: "/custom_orders" },
  ];

  const handleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav
        className="sticky top-4 z-50 bg-neutral-100/90 backdrop-blur-md 
          p-4 mt-2 mx-4 lg:mx-40 rounded-sm flex items-center 
          justify-between shadow-lg"
      >
        {/*Header wrapper: Logo + hamburger */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          {/*logo container */}
          <div className="flex items-center gap-2">
            <img
              src={logo}
              className="h-10 w-auto rounded-3xl object-contain hover:opacity-80 transition-opacity"
              alt="Company logo"
            />
            <span className="text-xl font-caveat font-bold text-orange">
              crochetLove
            </span>
          </div>

          {/* Hamburger Buton (shown on mobile only) */}
          <div className="flex items-center sm:hidden">
            <button
              className="text-gray-500 hover:text-orange focus:outline-none"
              onClick={handleOpen}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/*Desktop view */}
        {/*Navigation links */}
        <div className="items-center gap-2 font-bold hidden sm:flex capitalize">
          {navItems.map((item) => (
            <NavLink
              to={item.to}
              key={item.name}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/*Icons */}
        <div className="items-center gap-4 font-bold hidden sm:flex">
          {/** /wishlist icon */}
          <NavIconLink
            to={"/wishlist"}
            isActive={location.pathname === "/wishlist"}
            onClick={() => navigate("/wishlist")}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </NavIconLink>

          {/** /account Icon */}
          <NavIconLink
            to="/account"
            isActive={location === "/account"}
            onClick={() => navigate("/account")}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </NavIconLink>

          {/**Shopping Cart icon */}
          <NavIconLink
            to="/cart"
            isActive={location === "/cart"}
            onClick={() => navigate("/cart")}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0 0 24 24"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </NavIconLink>
        </div>

        {/** Mobile view */}
        {/*Navigation links */}
        <div
          className={`
            absolute left-0 top-full w-full
            bg-neutral-100/95 backdrop-blur-md
            shadow-lg
            transition-all duration-300 ease-in-out
            ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
            sm:hidden
          `}
        >
          <div className="flex flex-col items-center gap-4 font-bold py-6"></div>

          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {item.name}
            </NavLink>
          ))}

          {/*Icons */}
          <div className="flex my-6 gap-4">
            {/** /wishlist icon */}
            <NavIconLink
              to="/wishlist"
              isActive={location === "/wishlist"}
              onClick={() => navigate("/wishlist")}
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </NavIconLink>

            {/** /account Icon */}
            <NavIconLink
              to="/account"
              isActive={location === "/account"}
              onClick={() => navigate("/account")}
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </NavIconLink>

            {/**Shopping Cart icon */}
            <NavIconLink
              to="/cart"
              isActive={location === "/cart"}
              onClick={() => navigate("/cart")}
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0 0 24 24"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </NavIconLink>
          </div>
        </div>
      </nav>
    </>
  );
};
