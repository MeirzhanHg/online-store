import React from "react";
import { Link } from "react-router-dom";
import Subtitle from "components/ui/subtitle/Subtitle";
import { catalogItems } from "./Catalog.data";
import "./Catalog.scss";

const Catalog = () => {
  return (
    <div className="catalog">
      <Subtitle name="Избранное" title="Новое поступление" />
      <div className="catalog__wrapper">
        <div className="catalog__column catalog__column--left">
          <div className="catalog__bottom-content">
            <h3 className="catalog__title">{catalogItems[0].title}</h3>
            <p className="catalog__desc">{catalogItems[0].description}</p>
            <Link className="catalog__link" to="/">
              Купить
            </Link>
          </div>
          <img className="catalog__image" src={catalogItems[0].image} alt="" />
        </div>
        <div className="catalog__column catalog__column--right">
          <div className="catalog__column-women">
            <div className="catalog__bottom-content">
              <h3 className="catalog__title">{catalogItems[1].title}</h3>
              <p className="catalog__desc">{catalogItems[1].description}</p>
              <Link className="catalog__link" to="/">
                Shop Now
              </Link>
            </div>
            <img
              className="catalog__image"
              src={catalogItems[1].image}
              alt="women"
            />
          </div>
          <div className="catalog__row">
            {catalogItems.slice(2).map((item, index) => (
              <div
                className={`catalog__bottom ${
                  index === 0
                    ? "catalog__speakers-column"
                    : "catalog__perfume-column"
                }`}
                key={index}
              >
                <div className="catalog__bottom-content">
                  <h3 className="catalog__title">{item.title}</h3>
                  <p className="catalog__desc">{item.description}</p>
                  <Link className="catalog__link" to="/">
                    Купить
                  </Link>
                </div>
                <img
                  className="catalog__image"
                  src={item.image}
                  alt={item.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;