import React from "react";
import "./Music.scss";
import Button from "components/ui/button/Button";
import Timer from "components/ui/timer/Timer";
import musicImage from "assets/img/music.png";

const Music = () => {
  return (
    <section className="music">
      <div className="music__wrapper">
        <div className="music__content">
          <div className="music__subtitle">Категории</div>
          <h3 className="music__title">Улучшите свой музыкальный опыт</h3>
          <div className="music__timer">
            <Timer deadline="July, 8, 2023" ellipse="ellipse" />
          </div>
          <Button background classNames='music__btn'>
            Купить сейчас
          </Button>
        </div>
        <div className="music__image">
          <img src={musicImage} alt="music" />
        </div>
      </div>
    </section>
  );
};

export default Music;