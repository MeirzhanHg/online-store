import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
   return (
      <header className='header'>
         <div className="container">
            <div className="header_content">
               <Link to="/" className="header_logo">Exclusive</Link>
               <div className="header_menu">
                  <ul className="menu_list">
                     <li className="menu_item"><a href="#" className="menu_link">Home</a></li>
                     <li className="menu_item"><a href="#" className="menu_link">Contact</a></li>
                     <li className="menu_item"><a href="#" className="menu_link">About</a></li>
                     <li className="menu_item"><a href="#" className="menu_link">Sign Up</a></li>
                  </ul>
               </div>
               <div className="header_tools">
                  <div className="header_search"><input type="text" placeholder='What are you looking for?'/></div>
                  <div className="header_favorite"><img src="" alt="favorite" />1</div>
                  <div className="header_basket"><img src="" alt="basket" />2</div>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
