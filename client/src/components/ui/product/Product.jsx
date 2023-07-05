import { Link } from "react-router-dom";

import { AiFillStar, AiOutlineEye } from "react-icons/ai";

import "./Product.scss";

const Product = ({ item }) => {
   const { name, image, newPrice, oldPrice } = item;

   return (
      <div className="product productSlide">
         <div className="product-slide-header">
            <div className="product-slide-top">
               <div className="product-slide-percent">-40%</div>
               <Link to="/" className="product-slide-info">
                  <AiOutlineEye />
               </Link>
            </div>
            <div className="product-slide-center">
               <img src={image} alt={name} className="product-slide-img" />
            </div>
         </div>
         <div className="product-slide-bottom">
            <h3 className="product-product-name">{name}</h3>
            <div className="product-product-prices">
               <span className="product-product-price product-product-new-price">
                  {newPrice}
               </span>
               <span className="product-product-price product-product-old-price">
                  {oldPrice}
               </span>
            </div>
            <div className="product-product-stars">
               <AiFillStar />
               <AiFillStar />
               <AiFillStar />
               <AiFillStar />
               <AiFillStar />
            </div>
         </div>
      </div>
   );
};

export default Product;