import React, { useState } from "react";
import leftArrowIcon from "../../assets/left-arrow.svg";
import rightArrowIcon from "../../assets/right-arrow.svg";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalImages = images.length;

  const goToPrevious = (): void => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? totalImages - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = (): void => {
    const isLastImage = currentIndex === totalImages - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (totalImages === 0) return null;

  return (
    <div className="carousel">
      {totalImages > 1 && (
        <>
          <img
            src={leftArrowIcon}
            alt="Left"
            className="carousel__arrow carousel__arrow--left"
            onClick={goToPrevious}
          />
          <div className="carousel__counter">
            {`${currentIndex + 1}/${totalImages}`}
          </div>
          <img
            src={rightArrowIcon}
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
