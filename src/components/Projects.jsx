import React, { useState, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { IoCopy } from 'react-icons/io5';
import { BsSquareFill } from 'react-icons/bs';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';

const categories = ['All', 'Design', 'Development'];

const projects = [
  { title: 'Website 1', img: '/1.png', category: 'Design' },
  { title: 'Website 2', img: '/2.png', category: 'Design' },
  { title: 'Website 3', img: '/3.png', category: 'Design' },
  { title: 'Website 4', img: '/4.png', category: 'Development' },
  { title: 'Website 5', img: '/5.png', category: 'Development' },
  { title: 'Website 6', img: '/6.png', category: 'Development' },
];

const testimonials = [
  {
    text: `Rajoriya's Studio comments, "Teaming up with Krytons to elevate our Instagram presence has been incredible! We are absolutely thrilled with the results. Their efforts have given a significant boost to our online visibility, and we couldn't be happier!"`,
    author: "Rajoriya's Studio",
    img: '/rajoriya.png',
    isBlue: true,
  },
  {
    text: `Sharva Clinique from Delhi shares, "We trust Krytons for their social media magic. Their partnership has elevated our online presence across Instagram, Facebook, and YouTube, creating a buzz that resonates with our audience. We're thrilled to be on this journey to digital success with them!"`,
    author: "Sharva Clinique",
    img: '/sharva_logo.png',
    isBlue: false,
  },
  {
    text: `Care Mama Clinic & Vaccination Centre in Lucknow says, "Krytons' digital marketing expertise is amazing! We're thrilled with their impact, boosting our presence on Instagram and Facebook. They help us spread health and happiness with every click!"`,
    author: "Care Mama Clinic & Vaccination Centre",
    img: '/mamacare.png',
    isBlue: true,
  },
  {
    text: `Bright Scolar School and Bright Children's Academy express, "Krytons has done a fantastic job in expanding our social media presence through our Facebook page. Their efforts have not only met but exceeded our expectations, bringing increased engagement and visibility to our vibrant community of learners!"`,
    author: "Bright Scolar School",
    img: '/Group.png',
    isBlue: false,
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0px',
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="w-full py-16 bg-[#f4f7fe]">
      <div className="max-w-7xl mx-auto px-6 md:px-20 text-center">
        <h4
          className="text-blue-700 font-semibold mb-2 flex justify-center items-center gap-2"
          data-aos="fade-up"
        >
          <IoCopy className="text-blue-700" size={18} />
          Our Projects
        </h4>
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Recently Launched Projects
        </h2>
        <div
          className="flex justify-center items-center gap-2 mb-10"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="h-1 w-20 bg-black" />
          <BsSquareFill className="text-black" size={4} />
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap" data-aos="fade-up" data-aos-delay="300">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 shadow'
              }`}
              data-aos="fade-up"
              data-aos-delay={400 + idx * 100}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-42 object-contain bg-white"
              />
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="w-full bg-[#211fa6] text-white py-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <Slider {...sliderSettings}>
              {testimonials.map((item, idx) => {
                const isCenter =
                  idx === currentSlide % testimonials.length ||
                  (currentSlide % testimonials.length === testimonials.length &&
                    idx === 0);

                return (
                  <div key={idx} className="px-2" data-aos="zoom-in">
                    <div
                      className={`w-full rounded-xl shadow-md p-6 flex flex-col justify-between h-full transition-all duration-300 transform border ${
                        isCenter
                          ? 'bg-white text-gray-800 scale-105 z-10 border-white'
                          : 'bg-[#211fa6] text-white scale-95 opacity-90 border-white'
                      }`}
                    >
                      <div>
                        <FaQuoteLeft
                          className={`text-3xl mb-4 ${
                            isCenter ? 'text-blue-500' : 'text-white'
                          }`}
                        />
                        <p className="text-base leading-relaxed">{item.text}</p>
                      </div>
                      <div className="flex items-center mt-6">
                        <img
                          src={item.img}
                          alt={item.author}
                          className={`w-14 h-14 rounded-full object-cover mr-4 ${
                            isCenter
                              ? 'border border-blue-600'
                              : 'border border-white'
                          }`}
                        />
                        <div>
                          <h3 className="font-bold text-lg">{item.author}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
