import React, { useState, useEffect, useCallback, ReactNode } from 'react';
import { CarouselContainer, CarouselSlideContainer, Slide, DotsContainer, Dot } from './carousel.styles';

interface CarouselProps {
  children: ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % React.Children.count(children));
  }, [currentIndex, children]);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // Change every 5 seconds
    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <CarouselContainer>
      <CarouselSlideContainer style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => (
          <Slide key={index}>{child}</Slide>
        ))}
      </CarouselSlideContainer>

      <DotsContainer>
        {React.Children.map(children, (child, index) => (
          <Dot
            key={index}
            isActive={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
};

export default Carousel;
