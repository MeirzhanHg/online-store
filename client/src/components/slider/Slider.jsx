import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";

const slide_img = [
   "https://swiperjs.com/demos/images/nature-1.jpg",
   "https://swiperjs.com/demos/images/nature-2.jpg",
   "https://swiperjs.com/demos/images/nature-3.jpg",
   "https://swiperjs.com/demos/images/nature-4.jpg",
   "https://swiperjs.com/demos/images/nature-5.jpg",
   "https://swiperjs.com/demos/images/nature-6.jpg",
   "https://swiperjs.com/demos/images/nature-7.jpg",
   "https://swiperjs.com/demos/images/nature-8.jpg",
   "https://swiperjs.com/demos/images/nature-9.jpg",
];

const Slider = () => {
   return (
      <section>
         <div className="container">
            <Swiper
               grabCursor={true}
               centeredSlides={true}
               slidesPerView={4.5}
               loop={true}

               className="saleSlider"
            >
               {slide_img.map((img, i) => {
                  return (
                     <SwiperSlide key={i} className="saleSlide">
                        <img src={img} alt="" className="saleImg" />
                     </SwiperSlide>
                  );
               })}
            </Swiper>
         </div>
      </section>
   );
};

export default Slider;
