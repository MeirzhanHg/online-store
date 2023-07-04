import { Link, useLocation } from "react-router-dom";
import cn from "classnames";


import "./Header.scss";

const MenuItem = ({ item, setIsActive }) => {
   const { pathname } = useLocation();
   
   return (
      <li
         onClick={() => setIsActive(false)}
         className={cn("menu_item", {
            active: pathname === item.link,
         })}
      >
         <Link to={item.link} className="menu_link">
            {item.title}
         </Link>
      </li>
   );
};

export default MenuItem;
