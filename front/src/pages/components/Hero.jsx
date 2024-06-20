import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useSwipeable } from 'react-swipeable';
import hero from "../assets/Images/hero.jpg"
import hero2 from "../assets/Images/hero2.jpg"
import hero3 from "../assets/Images/hero3.jpg"
import hero4 from "../assets/Images/hero3.jpg"




const images = [
  hero,
  hero2,
 hero3,
 hero4,

];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const slideInterval = 5000;
  const interactionDelay = 3000;
  const intervalRef = useRef(null);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    setIsUserInteracting(true);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    setIsUserInteracting(true);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsUserInteracting(true);
  };

  const startAutoSlide = () => {
    if (!isUserInteracting) {
      intervalRef.current = setInterval(handleNextClick, slideInterval);
    }
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();

    const resetInteraction = setTimeout(() => {
      setIsUserInteracting(false);
    }, interactionDelay);

    return () => {
      stopAutoSlide();
      clearTimeout(resetInteraction);
    };
  }, [currentIndex, isUserInteracting]);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextClick(),
    onSwipedRight: () => handlePrevClick(),
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  return (
    <section id='hero' {...handlers}>
      <div
        className="slider"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={() => {
          setIsUserInteracting(false);
          startAutoSlide();
        }}
      >
        <div className="image">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className={currentIndex === index ? 'active' : ''}
            />
          ))}
          <FontAwesomeIcon className='arrow leftArr' icon={faAngleLeft} onClick={handlePrevClick} />
          <FontAwesomeIcon className='arrow rightArr' icon={faChevronRight} onClick={handleNextClick} />
        </div>
        <div className="dots">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
