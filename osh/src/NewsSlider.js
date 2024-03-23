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
      [{ src: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg', alt: 'Image 1' }],
      [{ src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg', alt: 'Image 2' }],
      [{ src: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg', alt: 'Image 3' }]
    ];
  
    return slides.map((slide, index) => (
      <div key={index} className={`slide ${currentSlide === index + 1 ? 'active' : ''} fade-in-out`}>
        <div className="slide-content-container">
          <img className='news-image' src={slide[0].src} alt={slide[0].alt} style={{ objectFit: 'cover' }} />
          <div className='news-text-container'>
          Lorem ipsum dolor sit amet, dsadasdashajdkalsdlksdaklkldsakkkkkkkkkk
          </div>
        </div>
      </div>
    ));
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
