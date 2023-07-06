import Subtitle from "components/ui/subtitle/Subtitle";
import { Link } from "react-router-dom";

import ps from "assets/img/catalog/01.png";
import women from "assets/img/catalog/women.png";
import speakers from "assets/img/catalog/11.png";
import perfume from "assets/img/catalog/12.png";

import "./Catalog.scss";

const Catalog = () => {
   return (
      <div className="catalog">
         <Subtitle name="Featured" title="New Arrival" />
         <div className="catalog-wrapper">
            <div className="catalog-column catalog-left">
               <div className="catalog-bottom-content">
                  <h3 className="catalog-title">Speakers</h3>
                  <p className="catalog-desc">Amazon wireless speakers</p>
                  <Link className="catalog-link" to="/">Shop Now</Link>
               </div>
               <img src={ps} alt="" />
            </div>
            <div className="catalog-column catalog-right">
               <div className="catalog-column-women">
                  <div className="catalog-bottom-content">
                     <h3 className="catalog-title">Women’s Collections</h3>
                     <p className="catalog-desc">
                        Featured woman collections that <br /> give you another vibe.
                     </p>
                     <Link className="catalog-link" to="/">Shop Now</Link>
                  </div>
                  <img src={women} alt="women" />
               </div>
               <div className="catalog-row">
                  <div className="catalog-bottom speakers-column">
                     <div className="catalog-bottom-content">
                        <h3 className="catalog-title">Speakers</h3>
                        <p className="catalog-desc">Amazon wireless speakers</p>
                        <Link className="catalog-link" to="/">Shop Now</Link>
                     </div>
                     <img src={speakers} alt="speakers" />
                  </div>
                  <div className="catalog-bottom perfume-column">
                     <div className="catalog-bottom-content">
                        <h3 className="catalog-title">Perfume</h3>
                        <p className="catalog-desc">GUCCI INTENSE OUD EDP</p>
                        <Link className="catalog-link" to="/">Shop Now</Link>
                     </div>
                     <img src={perfume} alt="perfume" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Catalog;
