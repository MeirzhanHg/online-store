import { Link } from "react-router-dom";

import basket from "assets/img/basket.svg";
import favorite from "assets/img/favorite.svg";
import search from 'assets/img/search.svg'

import MenuItem from "./MenuItem";
import { menuData } from "./menu.data.js";

import "./Header.scss";

const Header = () => {
   return (
      <header className="header">
         <div className="container">
            <div className="header_content">
               <Link to="/" className="header_logo">
                  Exclusive
               </Link>
               <div className="header_menu">
                  <ul className="menu_list">
                     {menuData?.map((item) => (
                        <MenuItem key={item.link} item={item} />
                     ))}
                  </ul>
               </div>
               <div className="header_tools">
                  <div className="header_search">
                     <input
                        type="text"
                        placeholder="What are you looking for?"
                     />
                     <button className='search_btn'>
                        <img src={search} alt="search" />
                     </button>
                  </div>
                  <button className="header_favorite">
                     <img src={favorite} alt="favorite" />
                  </button>
                  <button className="header_basket">
                     <img src={basket} alt="basket" />
                  </button>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
