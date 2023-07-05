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

import arrowLeft from "assets/img/icons/arrow-left-slider.svg";
import arrowRight from "assets/img/icons/arrow-right-slider.svg";

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
          slidesPerView={4.5}
          spaceBetween={30}
          className="sale-slider"
          navigation={{
            prevEl: ".custom-navigation-button-prev",
            nextEl: ".custom-navigation-button-next",
          }}
          breakpoints={{
            0: {
              slidesPerView: "auto",
            },
            576: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
          }}
        >
          {productds.map((item) => (
            <SwiperSlide
              key={item.id}
              className={`saleSlide ${
                item.id === activeSlideIndex ? "active" : ""
              }`}
            >
              <div className="sale-slide-top">
                <div className="sale-slide-percent">-40%</div>
                <Link to="/">
                  <AiOutlineEye />
                </Link>
              </div>
              <div className="sale-slide-center">
                <img src={item.image} alt="" className="sale-slide-img" />
              </div>
              <div className="sale-slide-bottom">
                <h3 className="sale-product-name">{item.name}</h3>
                <div className="sale-product-prices">
                  <span className="sale-product-price sale-product-new-price">
                    {item.price}
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
            <img src={arrowLeft} alt="To Left" />
          </div>
          <div
            className="custom-navigation-button custom-navigation-button-next"
            onClick={goNextSlide}
          >
            <img src={arrowRight} alt="To Right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

const productds = [
  {
    id: "1",
    name: "Acer",
    description:
      "Acer Inc (Acer) is an information and communication technology company that develops, designs, markets, and exports IT products.",
    element: "laptop",
    price: 100,
    image: saleProductImg1,
  },
  {
    id: "2",
    name: "Lenovo",
    description:
      "Lenovo is one of the world's leading personal technology companies, producing innovative PCs and mobile internet devices.",
    element: "laptop",
    price: 50,
    image: saleProductImg2,
  },
  {
    id: "3",
    name: "Asus",
    description:
      "ASUS is a Taiwan-based, multinational computer hardware and consumer electronics company that was established in 1989.",
    element: "laptop",
    price: 70,
    image: saleProductImg3,
  },
  {
    id: "4",
    name: "Mac",
    description:
      "The Mac, short for Macintosh (its official name until 1999), is a family of personal computers designed and marketed by Apple Inc.",
    element: "laptop",
    price: 200,
    image: saleProductImg4,
  },
  {
    id: "5",
    name: "Mac",
    description:
      "The Mac, short for Macintosh (its official name until 1999), is a family of personal computers designed and marketed by Apple Inc.",
    element: "laptop",
    price: 200,
    image: saleProductImg4,
  },
  {
    id: "6",
    name: "Mac",
    description:
      "The Mac, short for Macintosh (its official name until 1999), is a family of personal computers designed and marketed by Apple Inc.",
    element: "laptop",
    price: 200,
    image: saleProductImg4,
  },
];
