import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaShippingFast } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import airFreightImage from '../assets/images/alex-kotliarskyi-QBpZGqEMsKg-unsplash.webp';
import droneServiceImage from '../assets/images/mathurin-napoly-matnapo-uiOUuEx1e5U-unsplash.webp';
import logisticsImage from '../assets/images/linkedin-sales-solutions-hrhjn6ZTgrM-unsplash.webp';
import transportImage from '../assets/images/sten-rademaker-UZUzvJEvKnI-unsplash.webp';

const BlackCircleArrow = ({ iconSize = 'text-xs' }) => (
  <span className="bg-black rounded-full w-4 h-4 inline-flex items-center justify-center ml-1">
    <FaArrowRight className={`${iconSize} text-white`} />
  </span>
);

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      image: airFreightImage,
      icon: <FaShippingFast />,
      title: 'Air Freight Services',
      description: 'At our Auto Service garage, we are fully appreciate how difficult occur it is for people to find.',
    },
    {
      image: droneServiceImage,
      icon: <FaShippingFast />,
      title: 'Drone Services',
      description: 'These are unique and often they differ from one industry to the other. Our logistics expertise.',
    },
    {
      image: logisticsImage,
      icon: <FaShippingFast />,
      title: 'Logistics Solutions',
      description: 'Comprehensive logistics management to optimize your supply chain and reduce costs.',
    },
    {
      image: transportImage,
      icon: <FaShippingFast />,
      title: 'Transport Services',
      description: 'Efficient and reliable transport solutions for all your goods and cargo.',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < services.length - 2 ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : services.length - 2));
  };

  // Optional: Auto slide (if needed, but not in the image description)
  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 3000);
  //   return () => clearInterval(interval);
  // }, [currentSlide]);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Header Text */}
        <div className="text-center mb-12">
          <p className="text-green-600 font-medium text-sm">Real Solution, Real Fast !</p>
          <h2 className="text-3xl font-bold text-gray-800">Best Global Logistics Solutions.</h2>
        </div>

        {/* Services Carousel */}
        <div className="relative mb-8">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out -mx-2" style={{ transform: `translateX(-${currentSlide * 50}%)` }}>
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0 lg:w-1/2 px-2">
                  <div className="bg-white rounded-lg shadow-lg flex relative">
                    {/* Left Half - Image */}
                    <div className="w-1/2 relative z-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-60 object-cover"
                      />
                      <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-4xl text-white">{service.icon}</span>
                      </div>
                    </div>

                    {/* Right Half - Content */}
                    <div className="w-1/2 p-6 flex flex-col justify-center relative z-10 bg-white overflow-hidden">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                      <button className="flex items-center text-black font-medium">
                        <BlackCircleArrow iconSize="text-xs" /> <span className="ml-1">Read More</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Text and Navigation Dots Container */}
        <div className="flex justify-between items-center mt-4">
          {/* Text and Icon below carousel */}
          <div className="text-gray-700 text-sm flex items-center">
            <p className="inline-block mr-1">Logistic & Transport Solutions Saves Your Time. <strong>Finds Your Solutions</strong></p>
            <BlackCircleArrow iconSize="text-xs" />
          </div>

          {/* Navigation Dots - Moved here */}
          <div className="flex space-x-2">
            {services.map((_, index) => (
              // Render dots only for the number of possible slides (N - cards visible + 1)
              index <= services.length - 2 && (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full border-2 ${currentSlide === index ? 'bg-white border-green-500' : 'bg-gray-400 border-transparent'}`}
                />
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
