import React, { useState, useEffect } from "react";
import leftArrowIcon from "../../assets/left-arrow.svg";
import rightArrowIcon from "../../assets/right-arrow.svg";
import leftArrowSmallIcon from "../../assets/left-arrow-small.svg";
import rightArrowSmallIcon from "../../assets/right-arrow-small.svg";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 640);
  const totalImages = images.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 640);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? totalImages - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === totalImages - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (totalImages === 0) {
    return null;
  }

  // Determine which icons to use based on screen width
  const leftArrow = isMobileView ? leftArrowSmallIcon : leftArrowIcon;
  const rightArrow = isMobileView ? rightArrowSmallIcon : rightArrowIcon;

  return (
    <div className="carousel">
      {totalImages > 1 && (
        <>
          <img
            src={leftArrow}
            alt="Left"
            className="carousel__arrow carousel__arrow--left"
            onClick={goToPrevious}
          />
          <div className="carousel__counter">
            {`${currentIndex + 1}/${totalImages}`}
          </div>
          <img
            src={rightArrow}
            alt="Right"
            className="carousel__arrow carousel__arrow--right"
            onClick={goToNext}
          />
        </>
      )}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel__image"
      />
    </div>
  );
};

export default Carousel;
