import logo from "../../assets/images/logo.svg";

const NavLink = ({ children }) => {
  return (
    <a
      href="#"
      className="px-2 hover:text-orange relative inline-block
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
  const navIcons = ["Home", "Products", "custom orders"];
  const hoverIcon = `stroke-current fill-none hover:fill-orange transition`;

  return (
    <>
      <nav className="max-w-screen bg-neutral-100 hover:bg-neutral-300 p-4 mt-2 mx-4 lg:mx-40 rounded-sm flex items-center justify-between shadow-lg">
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

        {/*Navigation links */}
        <div className="flex items-center gap-2 font-bold">
          {navIcons.map((item) => (
            <NavLink key={item}>{item}</NavLink>
          ))}
        </div>

        {/*Icons */}
        <div className="flex items-center gap-4 font-bold">
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
