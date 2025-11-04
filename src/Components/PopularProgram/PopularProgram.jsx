
import React from "react";
import { Link } from "react-router";
const programs = [
  {
    name: "Undergraduate",
    icon: "🎓",
    description:
      "Explore undergraduate programs across top universities worldwide and start your academic journey with confidence.",
    link: "https://www.bachelorsportal.com/search/bachelor?utm_source=google&utm_medium=cpc&utm_campaign=21286117437&utm_content=162578615996&gad_source=1&gad_campaignid=21286117437&gbraid=0AAAAADmlPGzSdPY-WkpzeQFHvjkQtQJJa&gclid=CjwKCAiAwqHIBhAEEiwAx9cTeUevMxME_KLXBojliF_gXaIJeXEzjtjRNf3CK2p_qhDEfmA_JoEPSxoCEJMQAvD_BwE",
  },
  {
    name: "Postgraduate",
    icon: "📚",
    description:
      "Discover postgraduate courses and master's programs designed to enhance your expertise and career prospects.",
    link: "https://www.mastersportal.com/search/master",
  },
  {
    name: "PhD",
    icon: "🧪",
    description:
      "Join research-driven PhD programs to innovate, contribute to knowledge, and achieve academic excellence.",
    link: "https://www.phdportal.com/search/phd",
  },
  {
    name: "Diploma",
    icon: "🎯",
    description:
      "Enroll in specialized diploma programs to gain practical skills and professional qualifications quickly.",
    link: "/programs/diploma",
  },
];

const PopularProgram = () => {
  return (
    <div className="py-16 bg-[#151269] mb-10 rounded-2xl">

    <div className="text-center mb-12 px-6">
        <h2 className="title-font text-4xl md:text-5xl text-white mb-4">
          Popular Programs
        </h2>
        <p className="max-w-2xl mx-auto text-gray-200 text-sm md:text-base font-light">
         Explore a variety of academic paths designed for your growth — including Undergraduate, Postgraduate, PhD, and Diploma programs — each crafted to help you excel globally.
        </p>
      </div>

      <div className=" px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="group perspective">
              <div className="relative w-full h-64 transition-transform duration-[2000ms] ease-in-out transform-style-3d group-hover:rotate-y-180">
                
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden bg-white rounded-xl flex flex-col items-center justify-center text-center p-6 shadow-lg transform-style-3d transition-transform duration-700 ease-in-out">
                  <div className="text-5xl mb-4 transform transition-transform duration-700 ease-in-out group-hover:translate-z-12">
                    {program.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900 transform transition-transform duration-700 ease-in-out group-hover:translate-z-12">
                    {program.name}
                  </h3>
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full backface-hidden bg-blue-800 text-white rounded-xl flex  flex-col items-center justify-center p-6 rotate-y-180 text-sm transform-style-3d transition-transform duration-700 ease-in-out ">
                  <p className="transform transition-transform duration-700 ease-in-out group-hover:translate-z-12">
                    {program.description}
                  </p>
                  <Link to={program.link}
                  className="transform transition-transform duration-700 ease-in-out group-hover:translate-z-12 mt-10 border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-800">Learn More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .translate-z-12 {
          transform: translateZ(40px);
        }
        .group:hover .group-hover\\:translate-z-12 {
          transform: translateZ(60px);
        }
      `}</style>
    </div>
  );
};

export default PopularProgram;
