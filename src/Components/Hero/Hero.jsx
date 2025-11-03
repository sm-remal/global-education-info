import { useState, useEffect, useRef } from "react";


import hero1 from "../../assets/Images/bg.jpg";
import hero2 from "../../assets/Images/hero1.jpg";
import hero3 from "../../assets/Images/hero2.jpg";
import hero4 from "../../assets/Images/hero3.jpg";
import hero5 from "../../assets/Images/hero4.jpg";

const slides = [
  {
    image: hero1,
    title: "Explore Global Opportunities",
    description: "Discover top international universities and programs carefully curated to help you advance academically and professionally on a global scale."
  },
  {
    image: hero2,
    title: "Study Abroad With Confidence",
    description: "Access reliable guidance, verified resources, and practical tips to ensure a smooth and successful journey toward studying abroad."
  },
  {
    image: hero3,
    title: "Connect With Top Institutions",
    description: "Engage with leading universities and colleges worldwide to find the programs and opportunities that align perfectly with your educational goals."
  },
  {
    image: hero4,
    title: "Discover Scholarships",
    description: "Explore a wide range of scholarships, grants, and funding options that make pursuing your dream program more affordable and achievable."
  },
  {
    image: hero5,
    title: "Shape Your Future Today",
    description: "Join a thriving global community of learners and educators, taking meaningful steps toward realizing your academic and professional aspirations."
  },
];


export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);
  const totalSlides = slides.length;
  const containerRef = useRef(null);

  
  const extendedSlides = [...slides, slides[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
      setTransition(true);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle loop reset
  const handleTransitionEnd = () => {
    if (current >= totalSlides) {
      setTransition(false); 
      setCurrent(0); 
    }
  };

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Slides container */}
      <div
        ref={containerRef}
        className={`absolute inset-0 flex ${transition ? "transition-transform duration-1000 ease-in-out" : ""}`}
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedSlides.map((slide, index) => (
          <div
            key={index}
            className="relative min-w-full bg-center bg-cover"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Text content */}
      <div className="relative z-10 max-w-2xl mx-auto md:px-6 px-2 animate-fadeIn">
        <h1 className="text-3xl md:text-5xl font-bold mt-5 mb-8 text-blue-100 drop-shadow-lg title-font">
          {slides[current % totalSlides].title}
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-200 drop-shadow-md">
          {slides[current % totalSlides].description}
        </p>
        <button className="border bg-[#151269] hover:bg-white hover:text-blue-800 px-5 py-2 rounded-lg mt-10 cursor-pointer hover:font-semibold">
           Explore More
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrent(i);
              setTransition(true);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current % totalSlides ? "bg-blue-400 w-5" : "bg-gray-400 hover:bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
