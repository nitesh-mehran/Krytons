import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoCopy } from 'react-icons/io5';
import { FaSquareFull } from 'react-icons/fa';

import {
  SiPhp,
  SiNodedotjs,
  SiReact,
  SiFlutter,
  SiAndroid,
  SiFigma,
} from 'react-icons/si';

const services = [
  {
    title: 'APP DEVELOPMENT',
    description:
      "We make phone apps that are easy to use and just right for what you need. From planning to getting them on your phone, we've got it covered.",
    img: '/app_deve.svg',
  },
  {
    title: 'DIGITAL MARKETING',
    description:
      'We help your business get noticed online. Using smart strategies, we make sure people see and like what you do in the digital world.',
    img: '/digital_marketing.svg',
  },
  {
    title: 'WEB DEVELOPMENT',
    description:
      'We create websites that look great and work well. Let us bring your ideas to life and make your place on the internet stand out.',
    img: '/web_deve.svg',
  },
  {
    title: 'INTERNET OF THINGS',
    description:
      "We manage all your tech needs, allowing you to focus on your strengths. Rest easy knowing we’ve got everything running smoothly for you.",
    img: '/iot_deve.svg',
  },
  {
    title: 'MANAGED SERVICES',
    description:
      "We take care of your computer mess, so you can focus on what you do best. Relax, we've got your back, keeping everything running smoothly.",
    img: '/manage_service.svg',
  },
  {
    title: 'ChatBot Solutions',
    description:
      "We are like digital bodyguards of your computer. Our job is to keep the bad guys away and make sure that your information stays safe and sound.",
    img: '/chatbot.svg',
  },
];

const technologies = [
  { name: 'PHP', icon: <SiPhp size={40} className="text-blue-500" /> },
  { name: 'Node js', icon: <SiNodedotjs size={40} className="text-green-600" /> },
  { name: 'React Js', icon: <SiReact size={40} className="text-cyan-500" /> },
  { name: 'UI/UX', icon: <SiFigma size={40} className="text-pink-500" /> },
  { name: 'Flutter App', icon: <SiFlutter size={40} className="text-sky-400" /> },
  { name: 'Android', icon: <SiAndroid size={40} className="text-green-500" /> },
];

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div className="w-full py-16 bg-[#f4f7fe]">
        <div className="max-w-7xl mx-auto px-6 md:px-20 text-center">
          <h4
            className="text-blue-700 font-semibold mb-2 flex justify-center items-center gap-2"
            data-aos="fade-up"
          >
            <IoCopy className="text-blue-700 text-lg" />
            Our Services
          </h4>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            What Solutions We Provide
          </h2>
          <div
            className="flex justify-center items-center gap-2 mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="h-1 w-20 bg-black" />
            <FaSquareFull className="text-black text-[4px]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg transition duration-300 text-center group hover:bg-blue-700 hover:text-white relative overflow-hidden"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center mb-4">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <svg
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute w-full h-full transition-all duration-300 group-hover:scale-105"
                    >
                      <path
                        fill="white"
                        className="transition-colors duration-300 group-hover:fill-white fill-[#3B49DF]"
                        d="M44.8,-66.5C56.6,-60.3,63.6,-45.8,68.2,-31.3C72.7,-16.7,74.9,-2.2,72.1,11.3C69.3,24.7,61.5,37,50.3,48.7C39.2,60.4,24.7,71.5,9.4,71.2C-5.9,70.8,-21.9,59.1,-35.2,47.3C-48.5,35.4,-59.1,23.5,-64.5,8.4C-69.8,-6.8,-70.1,-25.1,-61.6,-37.8C-53.1,-50.6,-35.7,-57.7,-19.2,-61.8C-2.7,-65.8,12.8,-66.7,27.3,-67.2C41.8,-67.7,55.3,-67.7,44.8,-66.5Z"
                        transform="translate(100 100)"
                      />
                    </svg>
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-10 h-10 object-contain z-10"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white mb-6">
                  {service.description}
                </p>

                <div className="relative inline-block">
                  <span className="relative z-10 px-5 py-2 bg-white text-blue-700 font-semibold rounded-md overflow-hidden">
                    Read More
                  </span>
                  <span className="absolute top-0 left-0 h-full w-0 bg-white group-hover:w-full transition-all duration-500 ease-out rounded-md z-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Banner Image */}
      <div className="w-full mt-10" data-aos="fade-up">
        <img
          src="/ourdesign.png"
          alt="Service Banner"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Technologies Section */}
      <div className="text-center px-4 py-10 bg-gray-100">
        <h3
          className="text-blue-700 font-bold uppercase tracking-wider"
          data-aos="fade-up"
        >
          Technologies
        </h3>
        <h1
          className="text-4xl font-bold mt-2 mb-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Master in Trending Technologies
        </h1>
        <div
          className="flex justify-center mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="h-1 w-16 bg-black"></div>
        </div>

        <div
          className="flex justify-center gap-6 flex-wrap max-w-6xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center hover:shadow-xl transition w-[140px]"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {tech.icon}
              <p className="mt-4 text-lg font-semibold">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
