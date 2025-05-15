import React, { useState } from "react";
import {
  FaPaperPlane,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  const [activeTab, setActiveTab] = useState("software");

  return (
    <footer className="bg-[#211fa6] text-white relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-10 py-10 grid md:grid-cols-3 gap-10">
        {/* Get In Touch */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
          <p className="flex items-center mb-2 text-white">
            <FaMapMarkerAlt className="mr-2" />
            G-18, Mangalam Metropolis Tower, Near Purani Chungi, Ajmer Road 302019
          </p>
          <p className="flex items-center mb-2 text-white">
            <FaPhoneAlt className="mr-2" />
            +91 9315918170 , +91 9773388799
          </p>
          <p className="flex items-center mb-4 text-white">
            <FaEnvelope className="mr-2" />
            support@krytons.in
          </p>
          <div className="flex space-x-4">
            <a
              href="https://wa.me/918104942875"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:opacity-80 transition"
            >
              <RiWhatsappFill size={32} color="#25D366" />
            </a>
            <a
              href="https://www.instagram.com/__niitesh.1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-80 transition"
            >
              <FaSquareInstagram size={32} color="#E4405F" />
            </a>
            <a
              href="https://www.linkedin.com/in/niteshmehran"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-80 transition"
            >
              <IoLogoLinkedin size={32} color="#0077B5" />
            </a>
          </div>
        </div>

        {/* Popular Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">Popular Link</h3>
          <ul className="space-y-2 text-white">
            {[
              "About Us",
              "Contact Us",
              "Privacy Policy",
              "Terms & Condition",
              "Career",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:underline transition duration-200 hover:text-gray-200 hover:text-[1.01rem]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">Newsletter</h3>
          <p className="mb-4 text-white">Let's Join Us !!</p>
          <div className="flex items-center bg-white rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 text-black outline-none"
            />
            <button className="bg-blue-600 p-3">
              <FaPaperPlane className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Social Icons */}
      <div className="fixed right-4 bottom-20 flex flex-col space-y-4 z-50">
        <a
          href="https://wa.me/918104942875"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hover:opacity-80 transition"
        >
          <RiWhatsappFill size={40} color="#25D366" />
        </a>
        <a
          href='https://www.instagram.com/__nitesh.1'
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:opacity-80 transition"
        >
          <FaSquareInstagram size={40} color="#E4405F" />
        </a>
        <a
          href="https://www.linkedin.com/in/niteshmehran"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:opacity-80 transition"
        >
          <IoLogoLinkedin size={40} color="#0077B5" />
        </a>
      </div>

      {/* Bottom Tab Menu */}
      <div className="bg-[#211fa6] flex flex-col items-start py-8 max-w-7xl mx-auto px-10">
        <div className="flex space-x-10 border-b border-white/70 pb-4 mb-4 w-full">
          <button
            className={`font-semibold px-6 py-3 rounded-t-lg transition duration-200 ${
              activeTab === "software"
                ? "bg-white text-gray-800"
                : "text-white hover:text-gray-100 hover:text-[1.05rem]"
            }`}
            onClick={() => setActiveTab("software")}
          >
            Software development
          </button>
          <button
            className={`font-semibold px-6 py-3 rounded-t-lg transition duration-200 ${
              activeTab === "digital"
                ? "bg-white text-gray-800"
                : "text-white hover:text-gray-100 hover:text-[1.05rem]"
            }`}
            onClick={() => setActiveTab("digital")}
          >
            Digital Marketing
          </button>
        </div>

        {/* Description below buttons */}
        <div className="text-white text-sm max-w-4xl">
          {activeTab === "software" && (
            <>
              <h4 className="font-bold text-lg mb-2">Software development</h4>
              <p>
                Best Software Development Company In Jaipur || Software
                Development Company In Jaipur || Top Software Company In Jaipur
                || Software Development Service Provider In Jaipur || Software
                development is pr
              </p>
            </>
          )}
          {activeTab === "digital" && (
            <>
              <h4 className="font-bold text-lg mb-2">Digital Marketing</h4>
              <p>
                Top digital Marketing Company In Jaipur || Best Digital Marketing
                Company In Jaipur || Digital Marketing Company In Jaipur || Seo
                Service Provider In Jaipur || Smm Service Provider In Jaipur ||
                Best Lead Generation Company In Jaipur
              </p>
            </>
          )}
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="bg-[#211fa6] text-white text-center py-4 px-4 flex flex-col md:flex-row justify-between gap-4 md:gap-6 text-sm">
        <p>© Krytons Consultancies Private Limited, All Right Reserved.</p>
        <div className="flex space-x-6">
          {["Home", "Services", "Project", "Blog"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:underline transition duration-200 hover:text-gray-200 hover:text-[1.01rem]"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
