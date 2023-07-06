import Product from "components/ui/product/Product";
import Subtitle from "components/ui/subtitle/Subtitle";
import TypeBar from "./TypeBar";

import BrandBar from "./BrandBar";
import { useContext, useEffect } from "react";
import { Context } from "index";

import "./AllProducts.scss";
import { fetchDevices } from "http/deviceApi"

const AllProducts = () => {
   const { device } = useContext(Context);

   useEffect(() => {
      fetchDevices(null, null, 1, 10).then(data => {
          device.setDevices(data.rows)
          device.setTotalCount(data.count)
      })
  }, [])

   return (
      <section className="allproducts">
         <Subtitle name="Products" title="All Products" />

         <div className="allproducts-wrapper">
            <div className="allproducts-navbar">
               <TypeBar />
            </div>
            <div className="allproducts-right">
               <BrandBar />
               <div className="allproducts-list">
                  {device.devices.map((item) => (
                     <div className="allproducts-column" key={item.id}>
                        <Product item={item} />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default AllProducts;
