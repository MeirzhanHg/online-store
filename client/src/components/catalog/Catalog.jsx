import Subtitle from "components/ui/subtitle/Subtitle"

import ps from 'assets/img/catalog/01.png'
import women from 'assets/img/catalog/women.png'

import './Catalog.scss'

const Catalog = () => {
 return <div className="catalog">
   <Subtitle name='Featured' title='New Arrival'/>
   <div className="catalog-wrapper">
      <div className="catalog-column catalog-left">
         <img src={ps} alt="" />
      </div>
      <div className="catalog-column">
         <img src={women} alt="women" />
      </div>
   </div>
 </div>
}

export default Catalog