import { useState } from "react";
import logo from "../../assets/images/logo.svg";

const NavLink = ({ children }) => {
  return (
    <a
      href="#"
      className="px-2 py-3 sm:py-0 hover:text-orange relative block sm:inline-block
            after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0
            after:h-[2px] after:w-0 after:bg-orange
            after:transition-all after:duration-300
            hover:after:w-full"
    >
      {children}
    </a>
  );
};

const NavIcon = ({ children }) => {
  return (
    <a href="#" className="px-2 group hover:text-orange">
      <div className="size-6 stroke-current fill-none hover:fill-orange transition">
        {children}
      </div>
    </a>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navIcons = ["Home", "Products", "custom orders"];
  const hoverIcon = `stroke-current fill-none hover:fill-orange transition`;

  const handleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className="max-w-screen bg-neutral-100 hover:bg-neutral-300 p-4 mt-2 mx-4 lg:mx-40 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-lg">
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
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/*Desktop view */}
        {/*Navigation links */}
        <div className="items-center gap-2 font-bold hidden sm:flex">
          {navIcons.map((item) => (
            <NavLink key={item}>{item}</NavLink>
          ))}
        </div>

        {/*Icons */}
        <div className="items-center gap-4 font-bold hidden sm:flex">
          <NavIcon>
            <svg
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`${hoverIcon}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </NavIcon>

          <NavIcon>
            <svg
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`${hoverIcon}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </NavIcon>
        </div>

        {/** Mobile view */}
        {/*Navigation links */}
        <div
          className={`${isOpen ? "block" : "hidden"} items-center gap-2 font-bold sm:hidden mt-4 sm:mt-0`}
        >
          {navIcons.map((item) => (
            <NavLink key={item}>{item}</NavLink>
          ))}
        </div>

        {/*Icons */}
        <div
          className={`${isOpen ? "flex" : "hidden"} items-center gap-4 font-bold sm:hidden mt-4 sm:mt-0`}
        >
          <NavIcon>
            <svg
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`${hoverIcon}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </NavIcon>

          <NavIcon>
            <svg
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`${hoverIcon}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </NavIcon>
        </div>
      </nav>
    </>
  );
};
