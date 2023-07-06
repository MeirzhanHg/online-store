import React from "react";
import Subtitle from "components/ui/subtitle/Subtitle";
import { categoryList } from "./category.data";
import "./Category.scss";

const Category = () => {
  return (
    <div className="category">
      <Subtitle name="Categories" title="Browse By Category" />
      <div className="category-list">
        {categoryList.map((item, i) => (
          <div className="category-column" key={i}>
            <div className="category-item">
              <div className="category-item__icon">
                <img src={item.img} alt={item.name} />
              </div>
              <h4 className="category-item__name">{item.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
