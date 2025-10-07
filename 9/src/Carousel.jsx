import cn from 'classnames';
import React, { useState } from 'react';
import { uniqueId } from 'lodash';

// BEGIN (write your solution here)
const ImageCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div id="carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((imgSrc, index) => (
          <div
            key={uniqueId('carousel-item-')}
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
          >
            <img alt="" className="d-block w-100" src={imgSrc} />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ImageCarousel;
// END
