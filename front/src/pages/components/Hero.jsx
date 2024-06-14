import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useSwipeable } from 'react-swipeable';

const images = [
  "https://cinepoligulf-1.s3.ap-south-1.amazonaws.com/uploads/images/movies/1712210346686blob",
  "https://cms-assets.webediamovies.pro/cdn-cgi/image/dpr=1,fit=scale-down,gravity=auto,metadata=none,quality=85,width=2000/production/241/f0b74118c732a5e6188119c8b5fef2bb.jpg",
  "https://cms-assets.webediamovies.pro/cdn-cgi/image/dpr=1,fit=scale-down,gravity=auto,metadata=none,quality=85,width=2000/production/2/6c54150f09874301dfc2c30136c3388b.jpg",
  "https://cms-assets.webediamovies.pro/cdn-cgi/image/dpr=1,fit=scale-down,gravity=auto,metadata=none,quality=85,width=2000/production/2/03333239af6186119c38c7298aa3d1cc.jpg"
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

  // Swipeable handlers
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
