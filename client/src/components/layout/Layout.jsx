import Footer from './footer/Footer'
import Header from './header/Header'

import './Layout.scss'

const Layout = ({children}) => {
 return (
   <>
      <Header/>
         {children}
      <Footer/>
   </>
 )
}

export default Layout