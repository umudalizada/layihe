import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useSwipeable } from 'react-swipeable';
import { getAllData } from '../../service/requests';

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const slideInterval = 5000;
  const interactionDelay = 3000;
  const intervalRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragCurrentX, setDragCurrentX] = useState(0);
  const [isMouseOverSlider, setIsMouseOverSlider] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getAllData('heros');
        if (data) {
          setMovies(data.slice(0, 4)); 
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? movies.length - 1 : prevIndex - 1));
    setIsUserInteracting(true);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === movies.length - 1 ? 0 : prevIndex + 1));
    setIsUserInteracting(true);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsUserInteracting(true);
  };

  const startAutoSlide = () => {
    if (!isUserInteracting && !isMouseOverSlider) {
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
  }, [currentIndex, isUserInteracting, isMouseOverSlider]);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextClick(),
    onSwipedRight: () => handlePrevClick(),
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setDragStartX(event.clientX);
    setDragCurrentX(event.clientX);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      setDragCurrentX(event.clientX);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      const dragDistance = dragCurrentX - dragStartX;
      if (dragDistance > 50) {
        handlePrevClick();
      } else if (dragDistance < -50) {
        handleNextClick();
      }
    }
    setIsDragging(false);
  };

  const handleMouseEnterSlider = () => {
    setIsMouseOverSlider(true);
    stopAutoSlide();
  };

  const handleMouseLeaveSlider = () => {
    setIsMouseOverSlider(false);
    startAutoSlide();
  };

  return (
    <section id='hero' {...handlers}>
      <div
        className="slider"
        onMouseEnter={handleMouseEnterSlider}
        onMouseLeave={handleMouseLeaveSlider}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className="image">
          {movies.map((movie, index) => (
            <img
              key={index}
              src={movie.image}
              alt={`Slide ${index + 1}`}
              className={currentIndex === index ? 'active' : ''}
            />
          ))}
          <FontAwesomeIcon className='arrow leftArr' icon={faAngleLeft} onClick={handlePrevClick} />
          <FontAwesomeIcon className='arrow rightArr' icon={faChevronRight} onClick={handleNextClick} />
        </div>
        <div className="dots">
          {movies.map((_, index) => (
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
