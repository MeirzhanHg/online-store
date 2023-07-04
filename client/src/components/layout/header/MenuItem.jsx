import { Link, useLocation } from "react-router-dom";
import cn from "classnames";
import { useOnClickOutside } from "hooks/useOnClickOutside";

import "./Header.scss";

const MenuItem = ({ item }) => {
   const { pathname } = useLocation();
   
   return (
      <li
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
