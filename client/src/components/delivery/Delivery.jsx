import truck from "assets/img/icons/truck.svg";
import headphone from "assets/img/icons/headphone.svg";
import security from "assets/img/icons/security.svg";

import "./Deliver.scss";

const Delivery = () => {
   return (
      <div className="delivery">
         <div className="delivery-items">
            <div className="delivery-item">
               <img src={truck} alt="" />
               <h4 className="delivery-title">FREE AND FAST DELIVERY</h4>
               <p className="delivery-desc">
                  Free delivery for all orders over $140
               </p>
            </div>
            <div className="delivery-item">
               <img src={headphone} alt="" />
               <h4 className="delivery-title">24/7 CUSTOMER SERVICE</h4>
               <p className="delivery-desc">Friendly 24/7 customer support</p>
            </div>
            <div className="delivery-item">
               <img src={security} alt="" />
               <h4 className="delivery-title">MONEY BACK GUARANTEE</h4>
               <p className="delivery-desc">We rerun money within 30 days</p>
            </div>
         </div>
      </div>
   );
};

export default Delivery;
