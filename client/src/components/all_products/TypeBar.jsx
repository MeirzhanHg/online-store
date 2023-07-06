import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "index";
import cn from "classnames";

import "./AllProducts.scss";
import { fetchTypes } from "http/deviceApi"

const TypeBar = observer(() => {
   const { device } = useContext(Context);

   useEffect(() => {
      fetchTypes().then(data => device.setTypes(data))
   }, [])

   return (
      <div className="typebar">
         {device.types.map((type) => (
            <div
               key={type.id}
               className={cn("typebar__text", {
                  activeDevice: type.id === device.selectedType.id,
               })}
               onClick={() => device.setSelectedType(type)}
            >
               {type.name}
            </div>
         ))}
      </div>
   );
});

export default TypeBar;
