import cn from "classnames";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";

import { useOnClickOutside } from "hooks/useOnClickOutside";

import basket from "assets/img/basket.svg";
import favorite from "assets/img/favorite.svg";
import search from "assets/img/search.svg";

import MenuItem from "./MenuItem";
import { menuData } from "./menu.data.js";

import "./Header.scss";

const Header = () => {
   const { ref, setIsShow, isShow } = useOnClickOutside(false);

   return (
      <header className="header">
         <div className="container">
            <div className="header_content">
               <Link to="/" className="header_logo">
                  Exclusive
               </Link>
               <div
                  className={cn("header_menu", {
                     active: isShow,
                  })}
               >
                  <ul className="menu_list">
                     {menuData?.map((item) => (
                        <MenuItem
                           onClick={(e) => {
                              e.preventDefault()
                              console.log('click');
                              setIsShow(!isShow)
                           }}
                           key={item.link}
                           item={item}
                        />
                     ))}
                  </ul>
               </div>
               <div className="header_tools">
                  <div className="header_search">
                     <input
                        type="text"
                        placeholder="What are you looking for?"
                     />
                     <button className="search_btn">
                        <img src={search} alt="search" />
                     </button>
                  </div>
                  <button className="header_favorite">
                     <img src={favorite} alt="favorite" />
                  </button>
                  <button className="header_basket">
                     <img src={basket} alt="basket" />
                  </button>
                  <button
                     className="hamburger"
                     aria-label="Open menu"
                     onClick={() => setIsShow(!isShow)}
                  >
                     {isShow ? <IoClose /> : <CgMenuRight />}
                  </button>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
