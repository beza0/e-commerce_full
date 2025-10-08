import React from 'react'

const SliderItem = ({ imageSrc, title, heading }) => {
  return (
    <div className="slider-item fade">
      <div className="slider-image">
        <img src={imageSrc} className="img-fluid" alt={title || "slide"} />
      </div>
      <div className="container">
        <p className="slider-title">{title || "SUMMER 2022"}</p>
        <h2 className="slider-heading">{heading || "Save up to 70%"}</h2>
        <a href="#" className="btn btn-lg btn-primary">Explore Now</a>
      </div>
    </div>
  )
}

export default SliderItem
