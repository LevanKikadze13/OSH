import React, { useState, useEffect, useRef } from 'react';
import './NewsSlider.css'

function NewsSlider() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const sliderRef = useRef(null);

  useEffect(() => {
    const changeSlide = () => setCurrentSlide((prev) => (prev % 3) + 1);
    const intervalId = setInterval(changeSlide, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev % 3) + 1);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? 3 : prev - 1));
  };

  const renderSlides = () => {
    const slides = [
      // Replace with your actual image data
      { src: 'https://...', alt: 'Image 1' },
      { src: 'https://...', alt: 'Image 2' },
      { src: 'https://...', alt: 'Image 3' },
    ];

    return (
        <div className="slide active fade-in-out"> 
          <div className="slide-content-container">
            {slides.map((slide, index) => (
              <img key={index} src={slide.src} alt={slide.alt} style={{ objectFit: 'cover' }} /> 
            ))}
          </div>
        </div>
      );
  };

  const renderDots = () => {
    return new Array(3).fill(null).map((_, index) => (
      <span
        key={index}
        className={`dot ${currentSlide === index + 1 ? 'active' : ''}`}
        onClick={() => handleSlideChange(index + 1)}
      />
    ));
  };

  return (
    <div id="project-partners-container">
      <div id="slider-content-container" ref={sliderRef}>
        <span className="scrollBtn" id="js-prevBtn" onClick={handlePrevSlide}>
          &lsaquo;
        </span>
        <div className="slider-container">{renderSlides()}</div>
        <span className="scrollBtn" id="js-nextBtn" onClick={handleNextSlide}>
          &rsaquo;
        </span>
      </div>
      <div className="dot-container">{renderDots()}</div>
    </div>
  );
}

export default NewsSlider;
