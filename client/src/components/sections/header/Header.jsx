import logo from "../../../assets/images/logo.svg";

export const Header = () => {
  return (
    <nav
      className="sticky top-4 z-50 bg-neutral-100/90 backdrop-blur-md 
          p-4 mt-2 mb-4 mx-4 lg:mx-40 rounded-sm flex items-center 
          justify-between shadow-lg"
    >
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
    </nav>
  );
};
