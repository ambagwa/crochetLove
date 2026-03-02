import artistImage from "../../../assets/images/artist-face.jfif";
import loveIcon from "../../../assets/images/love-icon.png";

const LeftSection = () => {
  return (
    <div className="p-8">
      <div className="relative hidden sm:inline-block p-10 group">
        <img
          src={artistImage}
          alt="Abstract face"
          className="w-[300px] h-[300px] rounded-xl object-cover shadow-2xl transition-transform duration-300 group-hover:scale-105"
        />

        {/* 3. Top-left "Love" Div (Absolute) */}
        <div className="absolute -rotate-45 -top-4 -left-2 w-[100px] h-[100px] flex items-center justify-center animate-pulse">
          <img
            src={loveIcon}
            alt="Love"
            className="w-full h-full text-red-600"
          />
        </div>

        {/* 4. Bottom-right Circular Div (Absolute) */}
        <div className="absolute -bottom-2 -right-3 w-[80px] h-[80px] bg-orange-600 rounded-full shadow-lg transition-all duration-300 group-hover:bg-orange-700"></div>
      </div>
    </div>
  );
};

export default LeftSection;
