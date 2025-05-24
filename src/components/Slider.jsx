import React, { useState } from 'react';
import './Slider.css';
import sliderImage1 from '../assets/images/austin-distel-rxpThOwuVgE-unsplash.webp';
import sliderImage2 from '../assets/images/microsoft-365-MFK0JpFU13U-unsplash.webp';

const slides = [
  {
    id: 1,
    image: sliderImage1,
    heading: 'Best Shipping',
    highlight: 'Partner',
  },
  {
    id: 2,
    image: sliderImage2,
    heading: 'Global Logistic',
    highlight: 'Network',
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slides[currentIndex];

  return (
    <section className="slider-container">
      <div className="slider-wrapper">
        <img src={currentSlide.image} alt="Slide" className="slider-image" />

        <div className="text-box">
          <p className="logistic-label">LOGISTIC</p>
          <h1 className="slider-heading">
            {currentSlide.heading} <br />
            <span className="highlight">{currentSlide.highlight}</span>
          </h1>
          <p className="slider-description">
            Amet, tempus egestas facilisis volutpat viverra molestie lobortis
            posuere maecenas. molestie lobortis posuere maecenas. Eget sapien,
            gravida nequi.
          </p>
          <button className="discover-button">DISCOVER MORE</button>

          <div className="slider-controls">
            <span>{`${currentIndex + 1} / ${slides.length}`}</span>
            <div className="arrows">
              <span onClick={prevSlide}>&larr;</span>
              <span onClick={nextSlide}>&rarr;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
