import React, { useContext, useEffect, useState } from "react";

import { Context } from "index";

import { observer } from "mobx-react-lite";
import { createDevice, fetchBrands, fetchTypes } from "http/deviceApi";

import "./Admin.scss";
import Button from "components/ui/button/Button";

const CreateDevice = observer(({ show, onHide }) => {
   const { device } = useContext(Context);
   const [name, setName] = useState("");
   const [price, setPrice] = useState(0);
   const [file, setFile] = useState(null);
   const [info, setInfo] = useState([]);

   const [type, setType] = useState(null);
   const [brand, setBrand] = useState(null);

   const [error, setError] = useState(false);

   useEffect(() => {
      fetchTypes().then((data) => device.setTypes(data));
      fetchBrands().then((data) => device.setBrands(data));
   }, []);

   const newTypes = (e) => {
      setType(e.target.value);

      let element = JSON.parse(JSON.stringify(device.types)).filter((d) => {
         if (d.name === e.target.value) {
            return d.id;
         }
      });

      device.setSelectedType(element[0]);
   };

   const newBrand = (e) => {
      setBrand(e.target.value);

      let element = JSON.parse(JSON.stringify(device.brands)).filter((d) => {
         if (d.name === e.target.value) {
            return d.id;
         }
      });

      console.log(element[0]);

      device.setSelectedBrand(element[0]);
   };

   const selectFile = (e) => {
      setFile(e.target.files[0]);
   };

   const addDevice = () => {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("price", `${price}`);
      formData.append("rating", 5);
      formData.append("img", file);
      formData.append("brandId", device.selectedBrand.id);
      formData.append("typeId", device.selectedType.id);
      // formData.append("info", JSON.stringify(info));

      if (name && price && file && type && brand) {
         createDevice(formData)
            .then((data) => {
               setError(false);
               setName("");
               setPrice(0);
               setFile(null);
               setType(null);
               setBrand(null);
            })
            .catch((e) => console.log(e));
      } else {
         setError(true);
         console.log("Заполните данные");
      }
   };

   return (
      <div className="device">
         <div className="device__title">
            Заполните данные чтобы добавить устройство
         </div>
         <form onSubmit={(e) => e.preventDefault()}>
            <div className="elem card_item__color">
               <select
                  value={type || "Выберите тип"}
                  onChange={(e) => newTypes(e)}
                  className="card_item__select"
               >
                  <option disabled value="Выберите тип">
                     Выберите тип
                  </option>

                  {device.types.map((item) => {
                     return (
                        <option key={item.id} value={item.name}>
                           {item.name}
                        </option>
                     );
                  })}
               </select>
            </div>

            <div className="elem card_item__color">
               <select
                  value={brand || "Выберите бренд"}
                  onChange={(e) => newBrand(e)}
                  className="card_item__select"
               >
                  <option disabled value="Выберите бренд">
                     Выберите бренд
                  </option>
                  {device.brands.map((item) => {
                     return (
                        <option key={item.id} value={item.name}>
                           {item.name}
                        </option>
                     );
                  })}
               </select>
            </div>

            <input
               value={name}
               onChange={(e) => setName(e.target.value)}
               className="admin__input"
               placeholder="Введите название устройства"
            />
            <input
               value={price}
               onChange={(e) => setPrice(Number(e.target.value))}
               className="admin__input"
               placeholder="Введите стоимость устройства"
               type="number"
            />
            <input className="admin__input" type="file" onChange={selectFile} />
            {error && <div className="error">Заполните данные</div>}
            <div onClick={addDevice} className="admin__btn">
               <Button>Добавить</Button>
            </div>
         </form>
      </div>
   );
});

export default CreateDevice;
