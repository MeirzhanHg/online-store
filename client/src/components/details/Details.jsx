import { AiFillStar } from "react-icons/ai";

import { fetchOneDevice } from "http/deviceApi";
import { useEffect, useState } from "react";
import "./Details.scss";

const Details = ({id}) => {
   const [device, setDevice] = useState({ info: [] });
   useEffect(() => {
      fetchOneDevice(id).then((data) => setDevice(data));
   }, []);

   return (
      <div className="details">
         <div className="details__items">
            <div className="details__img">
               <img src={process.env.REACT_APP_API_URL + device.img} alt=""></img>
            </div>
            <div className="details__info">
               <h3 className="details__name">Sony</h3>
               <div className="details__product-prices">
                  <span className="details__product-price details__product-price--new">
                     120
                  </span>
               </div>
               <div className="details__product-stars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Details;
