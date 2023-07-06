import formatPrice from "utils/priceFormatter";
import "./CartFooter.scss";
import { useState } from "react";
import Button from "components/ui/button/Button";

const coupons = ["SALE", "JENYA", "FOOTER"]

const CartFooter = ({ total }) => {
   const [coupon, setCoupon] = useState("");
   const { count, price } = total;
	const [newPrice, setNewPrice] = useState(price)

   const setPriceByCoupon = (elem) => {
      if (elem && coupons.find(i => i === elem)) {
			setNewPrice(Math.round(price * 0.7))
      }
   };

   return (
      <footer className="cart-footer">
         {/* <div className='cart-footer__count'>{count} ед.</div> */}
         <div className="cart-footer__wrapper">
            <div className="cart-footer__coupon">
               <div className="coupon">
                  <input
                     type="text"
                     value={coupon}
                     onChange={(e) => setCoupon(e.target.value)}
                     placeholder="Coupon Code"
                  />
               </div>
               <div onClick={() => setPriceByCoupon(coupon)}>
                  <Button>Apply Coupon</Button>
               </div>
            </div>
            <div className="cart-footer__total">
               <h3 className="cart-footer__title">Cart Total</h3>
               <div className="cart-footer__row">
                  <div className="cart-footer__label">Subtotal</div>
                  <div className="price">{formatPrice(price)} руб.</div>
               </div>
               <div className="cart-footer__row">
                  <div className="cart-footer__label">Shipping:</div>
                  <div className="price">Free</div>
               </div>
               <div className="cart-footer__row">
                  <div className="cart-footer__label">Total:</div>
                  <div className="price">{formatPrice(newPrice)} руб.</div>
               </div>
					<div className="cart-footer-center">
               	<Button classNames='center'>Procees to checkout</Button>
					</div>
            </div>
         </div>
      </footer>
   );
};

export default CartFooter;
