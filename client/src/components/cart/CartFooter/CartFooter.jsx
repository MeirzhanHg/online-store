import formatPrice from "utils/priceFormatter";
import "./CartFooter.scss";
import { useEffect, useState } from "react";
import Button from "components/ui/button/Button";
import { Link } from "react-router-dom"

const coupons = ["SALE", "JENYA", "FOOTER"]

const CartFooter = ({ total }) => {
   const [coupon, setCoupon] = useState("");
   const { count, price } = total;
	const [newPrice, setNewPrice] = useState(price)

	useEffect(() => {
		setNewPrice(price)
	}, [price])

   const setPriceByCoupon = (elem) => {
      if (elem && coupons.find(i => i === elem)) {
			setNewPrice(Math.round(price * 0.7))
      }
   };

   return (
      <footer className="cart-footer">
         <div className="cart-footer__wrapper">
            <div className="cart-footer__coupon">
               <div className="coupon">
                  <input
                     type="text"
                     value={coupon}
                     onChange={(e) => setCoupon(e.target.value)}
                     placeholder="Код купона"
                  />
               </div>
               <div onClick={() => setPriceByCoupon(coupon)}>
                  <Button>Применить купон</Button>
               </div>
            </div>
            <div className="cart-footer__total">
               <h3 className="cart-footer__title">Общее количество корзин</h3>
               <div className="cart-footer__row">
                  <div className="cart-footer__label">Промежуточный итог</div>
                  <div className="price">{formatPrice(price)} руб.</div>
               </div>
               <div className="cart-footer__row">
                  <div className="cart-footer__label">Доставка:</div>
                  <div className="price">Бесплатно</div>
               </div>
               <div className="cart-footer__row">
                  <div className="cart-footer__label">Сумма:</div>
                  <div className="price">{formatPrice(newPrice)} руб.</div>
               </div>
					<Link to='/order' className="cart-footer-center">
               	<Button classNames='center'>Переходите к оформлению заказа</Button>
					</Link>
            </div>
         </div>
      </footer>
   );
};

export default CartFooter;
