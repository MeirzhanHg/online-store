import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { heroItems } from "./Hero.data";

import Slider from "components/ui/slider/Slider";

import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <Swiper
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
        >
          {heroItems.map((item) => (
            <SwiperSlide key={item.id}>
              <Slider item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
