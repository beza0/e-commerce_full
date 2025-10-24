import React, { useState } from 'react';
import "./Gallery.css";
import productsData from '../../../data.json';
import Slider from "react-slick";

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(productsData[0].img.singleImage);

  function NextButton({ onClick }) {
    return (
      <button className="glide__arrow glide__arrow--right" onClick={onClick}>
        <i className="bi bi-chevron-right"></i>
      </button>
    );
  }

  function PrevButton({ onClick }) {
    return (
      <button className="glide__arrow glide__arrow--left" onClick={onClick}>
        <i className="bi bi-chevron-left"></i>
      </button>
    );
  }

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 520,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="product-gallery">
      <div className="single-image-wrapper">
        <img src={`/${activeImage}`} id="single-image" alt="product" />
      </div>

      <div className="product-thumb">
        <Slider {...sliderSettings}>
          {productsData[0].img.thumbs.map((itemImg, index) => (
            <div key={index} onClick={() => setActiveImage(itemImg)}>
              <img
                src={`/${itemImg}`}
                alt={`thumb-${index}`}
                className={`img-fluid ${itemImg === activeImage ? 'active' : ''}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
