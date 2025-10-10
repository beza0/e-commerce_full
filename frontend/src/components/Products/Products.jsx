import React, { useState } from "react";
import "./Products.css";
import ProductItem from "./ProductItem";
import productData from "../../data.json";
import Slider from "react-slick";
import { CartContext } from "../../context/CartProvider";

function NextButton(props) {
  const { onClick } = props;
  return (
    <button className="glide__arrow glide__arrow--right" onClick={onClick}>
      <i className="bi bi-chevron-right"></i>
    </button>
  );
}

function PrevButton(props) {
  const { onClick } = props;
  return (
    <button className="glide__arrow glide__arrow--left" onClick={onClick}>
      <i className="bi bi-chevron-left"></i>
    </button>
  );
}

const Products = () => {
  const [products] = useState(productData);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h2>Featured Products</h2>
          <p>Summer Collection New Modern Design</p>
        </div>
        <div className="product-wrapper product-carousel">
          <Slider {...sliderSettings}>
            {products.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Products;
