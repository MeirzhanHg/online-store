import { Context } from "index";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgLogOut } from "react-icons/cg";


import "./Admin.scss";
import Button from "components/ui/button/Button";
import { createBrand, createType } from "http/deviceApi";

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

   const addType = () => {
      createType({ name: types }).then((data) => {
         setTypes("");
      });
   };

   const addBrand = () => {
      createBrand({ name: brand }).then((data) => {
         setBrand("");
      });
   };

   return (
      <div className="admin">
<CgLogOut/>
         <button className="admin__btn" onClick={() => logOut()}>Log Out</button>

         <div className="types">
            <div className="admin__label">Types</div>
            <input
               type="text"
               placeholder="Types"
               value={types}
               onChange={(e) => setTypes(e.target.value)}
            />
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
            <div className="admin__add" onClick={addBrand}>
               <Button>Добавить бренд</Button>
            </div>
         </div>
      </div>
   );
};

export default Admin;
