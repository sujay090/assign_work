import CircularGallery from '../StyleComoponents/cardSlide/CircularGallery'
import React, { useState, useEffect, useRef } from "react";
import {
  FaCloud,
  FaMobile,
  FaRobot,
  FaShieldAlt,
  FaCode,
  FaChartLine,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaPause
} from "react-icons/fa";
import SplitText from "../StyleComoponents/splitText/SplitText";
const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const services = [
    {
      icon: <FaCloud className="text-4xl text-blue-600" />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services to modernize your business operations.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaMobile className="text-4xl text-green-600" />,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaRobot className="text-4xl text-purple-600" />,
      title: "AI & Machine Learning",
      description:
        "Intelligent automation and data-driven insights to optimize your business processes.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-red-600" />,
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your digital assets and sensitive data.",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: <FaCode className="text-4xl text-orange-600" />,
      title: "Custom Software",
      description:
        "Tailored software solutions designed to meet your unique business requirements.",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      icon: <FaChartLine className="text-4xl text-teal-600" />,
      title: "Data Analytics",
      description:
        "Advanced analytics and business intelligence to drive informed decision-making.",
      gradient: "from-teal-500 to-blue-500"
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay && !isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === services.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isAutoPlay, isHovered, services.length]);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === services.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? services.length - 1 : currentIndex - 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl text-left font-bold text-white mb-4">
            <SplitText
              text="Our Services ------"
              className="text-6xl font-extrabold text-center"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </h2>
        </div>

        {/* Animated Card Slider Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Slider */}
          <div className="relative h-96 mb-8">
            <div 
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className={`relative h-full bg-gradient-to-br ${service.gradient} rounded-2xl p-8 overflow-hidden group hover:scale-105 transition-all duration-500`}>
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-1000"></div>
                      <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12 group-hover:scale-150 transition-transform duration-1000"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white">
                      <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                        {service.icon}
                      </div>
                      <h3 className="text-3xl font-bold mb-4 group-hover:text-yellow-200 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-lg leading-relaxed max-w-md opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                        {service.description}
                      </p>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mb-6">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="bg-gray-800/80 hover:bg-gray-700/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <FaChevronLeft size={20} />
            </button>

            {/* Auto-play Toggle */}
            <button
              onClick={toggleAutoPlay}
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg ${
                isAutoPlay 
                  ? 'bg-blue-600 hover:bg-blue-500 text-white' 
                  : 'bg-gray-800/80 hover:bg-gray-700/80 text-white'
              }`}
            >
              {isAutoPlay ? <FaPause size={16} /> : <FaPlay size={16} />}
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="bg-gray-800/80 hover:bg-gray-700/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <FaChevronRight size={20} />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center space-x-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-500 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 w-full bg-gray-700 rounded-full h-1 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-700 ease-in-out"
              style={{ 
                width: `${((currentIndex + 1) / services.length) * 100}%`,
                transform: isAutoPlay && !isHovered ? 'scaleX(1)' : 'scaleX(0.8)'
              }}
            />
          </div>
        </div>

        {/* Service Cards Preview (Mini Cards) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`cursor-pointer p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                index === currentIndex
                  ? 'bg-blue-600/20 border-2 border-blue-500'
                  : 'bg-gray-800/60 hover:bg-gray-700/60'
              }`}
            >
              <div className="text-center">
                <div className="mb-2 flex justify-center opacity-70">
                  {React.cloneElement(service.icon, { className: "text-2xl" })}
                </div>
                <h4 className="text-sm font-semibold text-white truncate">
                  {service.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
