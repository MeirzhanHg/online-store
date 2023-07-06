import Count from "../Count/Count";
import formatPrice from "utils/priceFormatter";
import deleteIcon from "assets/img/icons/cross.svg";

import "./Product.scss";

const Product = ({
   product,
   deleteProduct,
   increase,
   changeValue,
   decrease,
}) => {
   const { image, name, priceTotal, count, id } = product;

   return (
      <section className="basket">
         <div className="basket-wrapper">
            <div className="basket-img">
               <img src={image} alt={name} />
            </div>
         </div>
         <div className="basket-title">{name}</div>

         <div className="basket-count">
            <Count
               count={count}
               increase={increase}
               decrease={decrease}
               changeValue={changeValue}
               id={id}
            />
         </div>
         <div className="basket-price">{formatPrice(priceTotal)} руб.</div>
         <div className="basket-controls">
            <button
               type="button"
               onClick={() => {
                  deleteProduct(id);
               }}
            >
               <img src={deleteIcon} alt="Delete" />
            </button>
         </div>
      </section>
   );
};

export default Product;
