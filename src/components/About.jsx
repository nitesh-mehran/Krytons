import React, { useEffect } from 'react';
import {
  FaAward,
  FaUserTie,
  FaHeadset,
  FaTags,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaSquareFull,
} from 'react-icons/fa';
import { IoCopy } from 'react-icons/io5';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    // Add 80px padding left and right here
    <div className="w-full overflow-hidden bg-white py-12 px-[40px]"> {/* 80px left & right padding */}
      {/* --- About Section --- */}
      <div
        className="max-w-[calc(100%-160px)] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12"
        data-aos="fade-up"
      >
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-gray-700" data-aos="fade-right">
          <h4 className="text-blue-700 font-semibold mb-2 flex items-center gap-2">
            <IoCopy className="text-blue-700 text-lg" />
            Get to Know About Us
          </h4>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Creating IT Solutions
          </h1>
          <div className="flex items-center gap-2 mb-6">
            <div className="h-1 w-20 bg-black" />
            <FaSquareFull className="text-black text-[4px]" />
          </div>

          <p className="mb-4">
            Krytons Consultancies is the best IT solution company in Jaipur that delivers top-notch
            solutions and ensures high-quality services to overcome challenges. Trust us to guide your
            technology landscape with expertise and accuracy.
          </p>

          <p className="mb-4">
            We are in the process of creating a remarkable application that will connect you with skilled professionals who can cater to all your daily service needs. From IT solutions to planning, research, development, design, feedback implementation, reviews, and maintenance, our experienced staff at Krytons ensures a comprehensive service for every task.
          </p>

          <p className="mb-6">
            Our team is dedicated to providing a seamless experience for our clients, by offering them comprehensive
            services like <span className="text-blue-700 font-medium">digital marketing</span>,web development, app development and more. We are the upcoming big thing in the IT industry and the top software company in Jaipur, Rajasthan. We create a better future with technology while innovating technology for you.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 sm:gap-x-8 text-base font-semibold text-gray-800 mb-6">
            <div className="flex items-center gap-2">
              <FaAward className="text-blue-700" /> Award Winning
            </div>
            <div className="flex items-center gap-2">
              <FaHeadset className="text-blue-700" /> 24/7 Support
            </div>
            <div className="flex items-center gap-2">
              <FaUserTie className="text-blue-700" /> Professional Staff
            </div>
            <div className="flex items-center gap-2">
              <FaTags className="text-blue-700" /> Fair Prices
            </div>
          </div>

          {/* CTA + Social */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-blue-800 text-white font-semibold text-lg px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition">
              About
            </button>
            <a href="https://wa.me/8104942875" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-green-600 text-2xl hover:scale-110 transition" />
            </a>
            <a href="https://instagram.com/__nitesh.1" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-600 text-2xl hover:scale-110 transition" />
            </a>
            <a href="www.linkedin.com/in/niteshmehran" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-600 text-2xl hover:scale-110 transition" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-left" data-aos-delay="200">
          <img
            src="/about1.png"
            alt="Team working"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto rounded-xl shadow-xl object-cover"
          />
        </div>
      </div>

      {/* --- Business Verticals --- */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h4 className="flex justify-center items-center gap-2 text-blue-700 font-medium mb-2 text-sm sm:text-base text-center">
            <IoCopy className="text-blue-700 text-lg flex-shrink-0" />
            <span>
              mapping a digital path with our cutting-edge technological solutions for a variety of business verticals
            </span>
          </h4>

          <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Creating Durable Value for Different Business Verticals
          </h5>

          <div className="flex justify-center items-center gap-2 mb-10">
            <div className="h-1 w-16 bg-black" />
            <FaSquareFull className="text-black text-[4px]" />
          </div>
        </div>

        <div className="flex justify-center mt-10 px-4 sm:px-6" data-aos="fade-up" data-aos-delay="200">
          <img
            src="/about2.png"
            alt="Business Value Visual"
            className="w-full max-w-6xl h-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
