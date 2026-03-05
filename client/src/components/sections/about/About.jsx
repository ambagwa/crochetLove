import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const About = () => {
  return (
    <div className="mt-5 sm:mt-20 gap-4 grid grid-cols-1 sm:grid-cols-2">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default About;
