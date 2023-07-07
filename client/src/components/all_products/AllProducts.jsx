import Product from "components/ui/product/Product";
import Subtitle from "components/ui/subtitle/Subtitle";
import TypeBar from "./TypeBar";

import BrandBar from "./BrandBar";
import { useContext, useEffect } from "react";
import { Context } from "index";

import "./AllProducts.scss";
import { fetchBrands, fetchDevices, fetchTypes } from "http/deviceApi"
import { observer } from "mobx-react-lite"

const AllProducts = observer(() => {
   const { device } = useContext(Context);

   useEffect(() => {
      fetchTypes().then(data => device.setTypes(data))
      fetchBrands().then(data => device.setBrands(data))
      fetchDevices(null, null, 1, 10).then(data => {
          device.setDevices(data.rows)
          device.setTotalCount(data.count)
      })
   }, [])

   useEffect(() => {
      fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 10).then(data => {
         device.setDevices(data.rows)
         device.setTotalCount(data.count)
      })
   }, [device.page, device.selectedType, device.selectedBrand,])

   return (
      <section className="allproducts">
         <Subtitle name="Продукты" title="Все продукты" />

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
});

export default AllProducts;
