import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import saleProductImg1 from "assets/img/sale/sale-1.png";
import saleProductImg2 from "assets/img/sale/sale-2.png";
import saleProductImg3 from "assets/img/sale/sale-3.png";
import saleProductImg4 from "assets/img/sale/sale-4.png";
import saleProductImg5 from "assets/img/sale/sale-4.png";
import saleProductImg6 from "assets/img/sale/sale-4.png";

import arrowLeft from "assets/img/icons/arrow-left-slider.svg";
import arrowRight from "assets/img/icons/arrow-right-slider.svg";

import "swiper/scss";
import "./Sale.scss";

import Subtitle from "components/ui/subtitle/Subtitle";
import Product from "components/ui/product/Product";
import Button from "components/ui/button/Button";
import Timer from "components/ui/timer/Timer";

SwiperCore.use([Navigation]);

const products = [
   {
      id: "1",
      name: "Acer",
      description:
         "Acer Inc (Acer) is an information and communication technology company that develops, designs, markets, and exports IT products.",
      element: "laptop",
      price: 100,
      oldPrice: 70,
      image: saleProductImg1,
   },
   {
      id: "2",
      name: "Lenovo",
      description:
         "Lenovo is one of the world's leading personal technology companies, producing innovative PCs and mobile internet devices.",
      element: "laptop",
      price: 50,
      oldPrice: 25,
      image: saleProductImg2,
   },
   {
      id: "3",
      name: "Asus",
      description:
         "ASUS is a Taiwan-based, multinational computer hardware and consumer electronics company that was established in 1989.",
      element: "laptop",
      price: 70,
      oldPrice: 40,
      image: saleProductImg3,
   },
   {
      id: "4",
      name: "Mac",
      description:
         "The Mac, short for Macintosh (its official name until 1999), is a family of personal computers designed and marketed by Apple Inc.",
      element: "laptop",
      price: 200,
      oldPrice: 80,
      image: saleProductImg4,
   },
   {
      id: "5",
      name: "Mac",
      description:
         "The Mac, short for Macintosh (its official name until 1999), is a family of personal computers designed and marketed by Apple Inc.",
      element: "laptop",
      price: 200,
      oldPrice: 120,
      image: saleProductImg5,
   },
   {
      id: "6",
      name: "Mac",
      description:
         "The Mac, short for Macintosh (its official name until 1999), is a family of personal computers designed and marketed by Apple Inc.",
      element: "laptop",
      price: 200,
      oldPrice: 100,
      image: saleProductImg6,
   },
];

const Sale = () => {
   const [activeSlideIndex, setActiveSlideIndex] = useState(0);

   const goPrevSlide = () => {
      setActiveSlideIndex((prevIndex) =>
         prevIndex === 0 ? products.length - 1 : prevIndex - 1
      );
   };

   const goNextSlide = () => {
      setActiveSlideIndex((prevIndex) =>
         prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
   };

   return (
      <div className="sale">
         <div className="sale-top">
            <Subtitle title="Flash Sales" name="Today's" />
            <div className="sale-timer">
               <Timer timer="" deadline="July, 7, 2023" />
            </div>
         </div>

         <div className="sale-slider-container">
            <Swiper
               grabCursor={true}
               slidesPerView={4}
               spaceBetween={30}
               className="sale-slider"
               navigation={{
                  prevEl: ".custom-navigation-button-prev",
                  nextEl: ".custom-navigation-button-next",
               }}
               breakpoints={{
                  320: {
                     slidesPerView: 1,
                  },
                  430: {
                     slidesPerView: 2,
                  },
                  768: {
                     slidesPerView: 3,
                  },
                  1000: {
                     slidesPerView: 4,
                  },
               }}
            >
               {products.map((item) => (
                  <SwiperSlide
                     key={item.id}
                     className={`saleSlide ${
                        item.id === activeSlideIndex ? "active" : ""
                     }`}
                  >
                     <Product item={item} />
                  </SwiperSlide>
               ))}
            </Swiper>
            <div className="custom-navigation">
               <div
                  className="custom-navigation-button custom-navigation-button-prev"
                  onClick={goPrevSlide}
               >
                  <img src={arrowLeft} alt="" />
               </div>
               <div
                  className="custom-navigation-button custom-navigation-button-next"
                  onClick={goNextSlide}
               >
                  <img src={arrowRight} alt="" />
               </div>
            </div>
            <Link to="/all-products">
               <Button classNames="center">View All Products</Button>
            </Link>
         </div>
      </div>
   );
};

export default Sale;
