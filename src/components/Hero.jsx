import ShinyText from "../StyleComoponents/styleText/ShyniText";
import ScrambledText from "../StyleComoponents/scrembleText/ScrambledText";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mobileSize, setMobileSize] = useState(null);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobileSize(window.innerWidth);
    });
  });
  return (
    <section
      id="home"
      className="bg-gray-900 min-h-screen flex items-center justify-center text-white relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-12 sm:py-16 md:py-24 mt-16 sm:mt-20">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold mb-6 sm:mb-8 md:mb-10 leading-tight min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:h-32 flex flex-col items-center justify-center">
          <ShinyText
            text="BUILD ANYTHING WITH GS3"
            disabled={false}
            speed={2}
            className="custom-class"
          />
        </h1>
        <div className="">
          <ScrambledText
            className="scrambled-text-demo"
            radius={100}
            duration={1}
            speed={0.9}
            scrambleChars={""}
          >
            "The future belongs to those who believe in the beauty of their
            dreams. At GS3, we turn vision into reality."
          </ScrambledText>
        </div>
        {mobileSize > 768 ? (
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
            <div className="w-6 h-10 border-2 border-cyan-200 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cyan-200 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Hero;
