import Footer from "./footer/Footer";
import Header from "./header/Header";

import "./Layout.scss";

const Layout = ({ children, signUp }) => {
   return (
      <>
         <Header signUp={signUp}/>
         <main>{children}</main>
         <Footer />
      </>
   );
};

export default Layout;
