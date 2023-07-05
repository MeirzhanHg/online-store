import phoneIcon from "assets/img/icons/category/phone.svg";
import computerIcon from "assets/img/icons/category/computer.svg";
import watchIcon from "assets/img/icons/category/watch.svg";
import cameraIcon from "assets/img/icons/category/camera.svg";
import headphoneIcon from "assets/img/icons/category/headphones.svg";
import gamingIcon from "assets/img/icons/category/gaming.svg";

import "./Category.scss";

const Category = () => {
   return (
      <div className="category">
         <div className="section-subtitle">
            <div className="section-subtitle-block"></div>
            Categories
         </div>
         <h2 className="category-title section-title">Browse By Category</h2>
         <div className="category-list">
            <div className="category-item">
               <div className="category-icon">
                  <img src={phoneIcon} alt="" />
               </div>
               <h4 className="category-name">Phones</h4>
            </div>
            <div className="category-item">
               <div className="category-icon">
                  <img src={computerIcon} alt="" />
               </div>
               <h4 className="category-name">Phones</h4>
            </div>
            <div className="category-item">
               <div className="category-icon">
                  <img src={watchIcon} alt="" />
               </div>
               <h4 className="category-name">Phones</h4>
            </div>
            <div className="category-item">
               <div className="category-icon">
                  <img src={cameraIcon} alt="" />
               </div>
               <h4 className="category-name">Phones</h4>
            </div>
            <div className="category-item">
               <div className="category-icon">
                  <img src={headphoneIcon} alt="" />
               </div>
               <h4 className="category-name">Phones</h4>
            </div>
            <div className="category-item">
               <div className="category-icon">
                  <img src={gamingIcon} alt="" />
               </div>
               <h4 className="category-name">Phones</h4>
            </div>
         </div>
      </div>
   );
};

export default Category;
