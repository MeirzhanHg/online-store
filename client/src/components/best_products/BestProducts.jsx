import Product from "components/ui/product/Product";

import "./BestProducts.scss";
import Subtitle from "components/ui/subtitle/Subtitle";
import Button from "components/ui/button/Button";
import { fetchDevices } from "http/deviceApi";
import { useContext, useEffect } from "react";
import { Context } from "index";

const BestProducts = () => {
   const { device } = useContext(Context);

   useEffect(() => {
      fetchDevices(null, null, 1, 4).then((data) => {
         device.setDevices(data.rows);
         device.setTotalCount(data.count);
      });
   }, []);

   return (
      <>
         <div className="best__top">
            <Subtitle name="В этом месяце" title="Лучшие продукты" />
            <Button>Смотреть все</Button>
         </div>
         <div className="best">
            <div className="best__list">
               {device.devices.slice(1, 5).map((item) => (
                  <div className="best__column" key={item.id}>
                     <Product item={item} />
                  </div>
               ))}
            </div>
         </div>
      </>
   );
};

export default BestProducts;
