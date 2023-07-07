import React, { useContext, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import arrowLeft from "assets/img/icons/arrow-left-slider.svg";
import arrowRight from "assets/img/icons/arrow-right-slider.svg";

import "swiper/scss";
import "./Sale.scss";

import Subtitle from "components/ui/subtitle/Subtitle";
import Product from "components/ui/product/Product";
import Button from "components/ui/button/Button";
import Timer from "components/ui/timer/Timer";
import { Context } from "index";
import { fetchDevices } from "http/deviceApi";
import { observer } from "mobx-react-lite"

SwiperCore.use([Navigation]);

const Sale = observer(() => {
   const { device } = useContext(Context);
   const [data, setData] = useState(device.devices);

   useEffect(() => {
      fetchDevices(null, null, 1, 8).then((data) => {
         device.setDevices(data.rows);
         device.setTotalCount(data.count);
      });
   }, []);

   const [activeSlideIndex, setActiveSlideIndex] = useState(0);

   const goPrevSlide = () => {
      setActiveSlideIndex((prevIndex) =>
         prevIndex === 0 ? device.devices.length - 1 : prevIndex - 1
      );
   };

   const goNextSlide = () => {
      setActiveSlideIndex((prevIndex) =>
         prevIndex === device.devices.length - 1 ? 0 : prevIndex + 1
      );
   };

   // const onBasket = (id) => {
   //    console.log(id);

   //    let item = JSON.parse(JSON.stringify(device.devices));

   //    let basketElem = item.filter((d) => d.id == id);

   //    device.setBasket(basketElem);

   //    console.log(JSON.parse(JSON.stringify(device.baskets)));
   // };

   return (
      <div className="sale">
         <div className="sale-top">
            <Subtitle title="Скидки" name="Сегодня" />
            <div className="sale-timer">
               <Timer timer="" deadline="July, 8, 2023" />
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
                  0: {
                     slidesPerView: 1,
                  },
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
               {device.devices.map((item) => (
                  <SwiperSlide
                     key={item.id}
                     className={`saleSlide ${
                        item.id === activeSlideIndex ? "active" : null
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
               <Button classNames="center">Смотреть все продукты</Button>
            </Link>
         </div>
      </div>
   );
});

export default Sale;
