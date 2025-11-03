import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-[#0B1B33] via-[#0F2346] to-[#132A5A] text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        
        {/* --- Brand Info --- */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Global<span className="text-blue-400">EduInfo</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            Empowering learners worldwide with trusted education insights,
            global opportunities, and expert guidance for a brighter future.
          </p>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="/courses" className="hover:text-blue-400 transition">Courses</a></li>
            <li><a href="/universities" className="hover:text-blue-400 transition">Universities</a></li>
            <li><a href="/scholarships" className="hover:text-blue-400 transition">Scholarships</a></li>
          </ul>
        </div>

        {/* --- Support --- */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-blue-400 transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
            <li><a href="/faq" className="hover:text-blue-400 transition">FAQs</a></li>
            <li><a href="/terms" className="hover:text-blue-400 transition">Terms & Privacy</a></li>
          </ul>
        </div>

        {/* --- Contact --- */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3"><FaEnvelope /> info@globaleduinfo.com</li>
            <li className="flex items-center gap-3"><FaPhoneAlt /> +880 1777 000 999</li>
            <li className="flex items-center gap-3"><FaMapMarkerAlt /> 45 Knowledge Street, Dhaka, Bangladesh</li>
          </ul>

          <div className="flex gap-4 mt-5">
            <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-400"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* --- Bottom Section --- */}
      <div className="text-center text-sm mt-6 text-gray-400">
        <p>© 2025 Global Education Info. All rights reserved.</p>
      </div>
    </footer>
  );
}
