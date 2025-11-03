import React from "react";
import Container from "../../Container/Container";

const HowItWork = () => {
  return (
    <>
      <Container>
        <section className="relative overflow-hidden bg-linear-to-b from-indigo-50 via-white to-white py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            {/* Section Heading */}
            <header className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight flex justify-center items-center gap-2">
                🚀 <span>How It Works</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                Students can easily use our website in 4 simple steps to find
                universities and scholarships.
              </p>
            </header>

            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <article className="group bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 text-center">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-indigo-600 text-white text-2xl font-bold shadow-md mb-4 group-hover:scale-110 transition">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Sign Up & Create Profile
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Register easily and create your profile with your educational
                  and personal information.
                </p>
              </article>

              {/* Step 2 */}
              <article className="group bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 text-center">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-emerald-500 text-white text-2xl font-bold shadow-md mb-4 group-hover:scale-110 transition">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Find Universities & Scholarships
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Filter universities and scholarships based on your preferences
                  such as country, subject, or budget.
                </p>
              </article>

              {/* Step 3 */}
              <article className="group bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 text-center">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-amber-500 text-white text-2xl font-bold shadow-md mb-4 group-hover:scale-110 transition">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Submit Applications
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Apply online for your chosen universities and scholarships
                  from one platform.
                </p>
              </article>

              {/* Step 4 */}
              <article className="group bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 text-center">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-pink-600 text-white text-2xl font-bold shadow-md mb-4 group-hover:scale-110 transition">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Track Your Progress & Get Admission
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Track the status of your applications, receive notifications
                  via email, and get your offer letter!
                </p>
              </article>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-14">
              <a
                href="/register"
                className="inline-block bg-linear-to-r from-indigo-600 to-purple-600 text-white text-base sm:text-lg font-medium px-8 py-3 rounded-full shadow-md hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Decorative Background Circles */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-200/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-300/40 rounded-full blur-3xl animate-pulse"></div>
        </section>
      </Container>
    </>
  );
};

export default HowItWork;
