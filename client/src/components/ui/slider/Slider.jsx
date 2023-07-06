import Button from "../button/Button";

import "./Slider.scss";

const Slider = ({ item }) => {
  const { title, desc, image } = item;
  return (
    <div className="slider">
      <div className="slider__content">
        <div className="slider__content--left">
          <div className="slider__text">
            <h1 className="slider__title">{title}</h1>
            <p className="slider__desc">{desc}</p>
          </div>
          <div className="slider__btns">
            <Button classNames={`slider__btn`} background={`transparent`}>
              Shop Now
            </Button>
            <Button classNames={`slider__btn`}>Add To Cart</Button>
          </div>
        </div>
        <div className="slider__content--right">
          <div className="slider__img-container">
            <img src={image} alt="" className="slider__img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
