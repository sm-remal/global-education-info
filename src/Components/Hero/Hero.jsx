import { useState, useEffect, useRef } from "react";

import bg from "../../assets/Images/bg.jpg";
import hero1 from "../../assets/Images/hero1.jpg";
import hero2 from "../../assets/Images/hero2.jpg";
import hero3 from "../../assets/Images/hero3.jpg";
import hero4 from "../../assets/Images/hero4.jpg";

const slides = [
  { image: bg, title: "Explore Global Opportunities", description: "Find world-class universities and programs designed for your future." },
  { image: hero1, title: "Study Abroad With Confidence", description: "Access verified information and resources for students worldwide." },
  { image: hero2, title: "Connect With Top Institutions", description: "Your gateway to quality education across continents." },
  { image: hero3, title: "Discover Scholarships", description: "Apply to the best scholarships that match your dream program." },
  { image: hero4, title: "Shape Your Future Today", description: "Join our global community of learners and educators." },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);
  const containerRef = useRef(null);

  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
      setTransition(true);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle infinite loop
  const handleTransitionEnd = () => {
    if (current === totalSlides) {
      
      setTransition(false);
      setCurrent(0);
    }
  };

  
  const extendedSlides = [...slides, slides[0]]; 

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
            className="w-full shrink-0 relative bg-center bg-cover"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Text content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 animate-fadeIn">
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-100 drop-shadow-lg">
          {slides[current % totalSlides].title}
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-200 drop-shadow-md">
          {slides[current % totalSlides].description}
        </p>
        <button className="px-8 py-3 bg-linear-to-r from-blue-500 to-indigo-600 rounded-full text-white font-semibold hover:from-indigo-500 hover:to-blue-600 transition-all duration-300 shadow-lg">
          Sign Up
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
