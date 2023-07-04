import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import { Navigation } from "swiper/modules";
import "swiper/scss";

import { Link } from "react-router-dom";

import { AiFillStar, AiOutlineEye } from "react-icons/ai";

import saleProductImg1 from "assets/img/sale/sale-1.png";
import saleProductImg2 from "assets/img/sale/sale-2.png";
import saleProductImg3 from "assets/img/sale/sale-3.png";
import saleProductImg4 from "assets/img/sale/sale-4.png";
import saleProductImg5 from "assets/img/sale/sale-4.png";
import saleProductImg6 from "assets/img/sale/sale-4.png";

import "./Slider.scss";

SwiperCore.use([Navigation]);

const slide_img = [
  saleProductImg1,
  saleProductImg2,
  saleProductImg3,
  saleProductImg4,
  saleProductImg5,
  saleProductImg6,
];

const Slider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const goPrevSlide = () => {
    setActiveSlideIndex((prevIndex) =>
      prevIndex === 0 ? slide_img.length - 1 : prevIndex - 1
    );
  };

  const goNextSlide = () => {
    setActiveSlideIndex((prevIndex) =>
      prevIndex === slide_img.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="sale">
      <div className="sale-title">Flash Sales</div>
      <div className="sale-slider-container">
        <Swiper
          grabCursor={true}
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          className="sale-slider"
          navigation={{
            prevEl: ".custom-navigation-button-prev",
            nextEl: ".custom-navigation-button-next",
          }}
        >
          {slide_img.map((img, i) => (
            <SwiperSlide
              key={i}
              className={`saleSlide ${i === activeSlideIndex ? "active" : ""}`}
            >
              <div className="sale-slide-top">
                <div className="sale-slide-percent">-40%</div>
                <Link to="/">
                  <AiOutlineEye />
                </Link>
              </div>
              <div className="sale-slide-center">
                <img src={img} alt="" className="sale-slide-img" />
              </div>
              <div className="sale-slide-bottom">
                <h3 className="sale-product-name">HAVIT HV-G92 Gamepad</h3>
                <div className="sale-product-prices">
                  <span className="sale-product-price sale-product-new-price">
                    $120
                  </span>
                  <span className="sale-product-price sale-product-old-price">
                    $160
                  </span>
                </div>
                <div className="sale-product-stars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-navigation">
          <div
            className="custom-navigation-button custom-navigation-button-prev"
            onClick={goPrevSlide}
          >
            <span>&lt;</span>
          </div>
          <div
            className="custom-navigation-button custom-navigation-button-next"
            onClick={goNextSlide}
          >
            <span>&gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
