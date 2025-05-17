// import Image from 'next/image';
// import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8 px-6 md:px-20" id="footer">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/images/Professional.jpg"
              alt="Professional Navigators Logo"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h4 className="font-bold text-lg">Professional Navigators</h4>
              <p className="text-sm text-gray-400">Empowering CA Aspirants since 2023</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        {/* <div>
          <h4 className="font-semibold text-white text-lg mb-4">Home</h4>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#footer" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div> */}

        <div>
          <h4 className="font-semibold text-white text-lg mb-4">Courses</h4>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">CA Foundation</a></li>
            <li><a href="#" className="hover:text-white">CA Inter</a></li>
            <li><a href="#" className="hover:text-white">CMA</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white text-lg mb-4">Get in Touch</h4>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li> <a
              href="mailto:professionalnavigators135@gmail.com"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              Email:professionalnavigators135@gmail.com
            </a></li>
            <li><a
              href="tel:8369731150"
              className="text-gray-300 hover:text-white block transition-colors duration-200"
            >
              Phone: 8369731150
            </a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer Line */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © 2023 Professional Navigators. All rights reserved.
      </div>
    </footer>
  );
}