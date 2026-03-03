import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {
  images: string[];
};

export default function ImageCarousel({ images }: Props) {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      useKeyboardArrows
    >
      {images.map((src, index) => (
        <div key={index}>
          <img src={src} />
        </div>
      ))}
    </Carousel>
  );
}
