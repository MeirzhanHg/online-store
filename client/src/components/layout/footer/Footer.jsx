import "./Footer.scss";

const Footer = () => {
   return (
      <footer className="footer">
         <div className="container">
            <div className="footer_content">
               <div className="footer_columns">
                  <div className="footer_row">
                     <div className="footer_item">
                        <h3 className="footer_title">Exclusive</h3>
                        <div className="footer_label">Subscribe</div>
                        <div className="footer_text">
                           Get 10% off your first order
                        </div>
                     </div>
                  </div>

                  <div className="footer_row">
                     <div className="footer_item">
                        <div className="footer_label">Support</div>
                        <div className="footer_text">
                           111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                        </div>
                        <div className="footer_email">exclusive@gmail.com</div>
                        <a href='#' className="footer_phone">+88015-88888-9999</a>
                     </div>
                  </div>

                  <div className="footer_row">
                     <div className="footer_item">
                        <div className="footer_label">Account</div>
                        <div className="footer_text">My Account</div>
                        <div className="footer_text">Login / Register</div>
                        <div className="footer_text">Cart</div>
                        <div className="footer_text">Wishlist</div>
                        <div className="footer_text">Shop</div>
                     </div>
                  </div>

                  <div className="footer_row">
                     <div className="footer_item">
                        <div className="footer_label">Quick Link</div>
                        <div className="footer_text">Privacy Policy</div>
                        <div className="footer_text">Terms Of Use</div>
                        <div className="footer_text">FAQ</div>
                        <div className="footer_text">Contact</div>
                     </div>
                  </div>
                  <div className="footer_row">
                     <div className="footer_item">
                        <div className="footer_label">Quick Link</div>
                        <div className="footer_text">Privacy Policy</div>
                        <div className="footer_text">Terms Of Use</div>
                        <div className="footer_text">FAQ</div>
                        <div className="footer_text">Contact</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
