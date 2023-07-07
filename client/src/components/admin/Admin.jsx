import { Context } from "index";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgLogOut } from "react-icons/cg";

import "./Admin.scss";
import Button from "components/ui/button/Button";
import { createBrand, createDevice, createType } from "http/deviceApi";
import CreateDevice from "./createDevice";

const Admin = () => {
   const { user } = useContext(Context);
   const navigate = useNavigate();

   const logOut = () => {
      user.setUser({});
      user.setIsAuth(false);
      navigate("/");
   };

   const [types, setTypes] = useState("");
   const [brand, setBrand] = useState("");

   const [errorType, setErrorType] = useState(false);
   const [error, setError] = useState(false);

   const addType = () => {
      if (types) {
         createType({ name: types })
            .then((data) => {
               setTypes("");
               setErrorType(false);
            })
            .catch((e) => console.log(e));
      } else {
         setErrorType(true);
      }
   };

   const addBrand = () => {
      if (brand) {
         createBrand({ name: brand })
            .then((data) => {
               setBrand("");
               setError(false);
            })
            .catch((e) => console.log(e));
      } else {
         setError(true);
      }
   };

   return (
      <div className="admin">
         <div className="admin__wrapper" onClick={() => logOut()}>
            <div className="admin__icon">
               <CgLogOut />
            </div>
            <button className="admin__btn">Log Out</button>
         </div>

         <div className="admin__content">
            <div className="admin__create">
               <div className="types">
                  <div className="admin__label">Тип</div>
                  <input
                     type="text"
                     placeholder="Тип"
                     value={types}
                     onChange={(e) => setTypes(e.target.value)}
                  />
                  <div className="error">{errorType && "Напишите тип!"}</div>
                  <div className="admin__add" onClick={addType}>
                     <Button>Добавить тип</Button>
                  </div>
               </div>

               <div className="brand">
                  <div className="admin__label">Бренд</div>
                  <input
                     type="text"
                     placeholder="Бренд"
                     value={brand}
                     onChange={(e) => setBrand(e.target.value)}
                  />
                  <div className="error">{error && "Напишите бренд!"}</div>
                  <div className="admin__add" onClick={addBrand}>
                     <Button>Добавить бренд</Button>
                  </div>
               </div>
            </div>

            <CreateDevice />
         </div>
      </div>
   );
};

export default Admin;
