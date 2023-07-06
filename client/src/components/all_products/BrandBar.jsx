import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "index";
import cn from "classnames";

import './AllProducts.scss'
import { fetchBrands } from "http/deviceApi"

const BrandBar = observer(() => {
   const { device } = useContext(Context);

   useEffect(() => {
      
      fetchBrands().then(data => device.setBrands(data))
   
  }, [])

   return (
      <div className="brand">
         {device.brands.map((brand) => (
            <div
               key={brand.id}
               className={cn("brand__name", {
                  brandActive: brand.id === device.selectedBrand.id,
               })}
               onClick={() => device.setSelectedBrand(brand)}
            >
               {brand.name}
            </div>
         ))}
      </div>
   );
});

export default BrandBar;
