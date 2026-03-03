import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const About = () => {
  return (
    <div className="mt-1o gap-4 grid grid-cols-1 sm:grid-cols-2">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default About;
