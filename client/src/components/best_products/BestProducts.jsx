import Product from "components/ui/product/Product";
import { best } from "./best.data";

import "./BestProducts.scss";
import Subtitle from "components/ui/subtitle/Subtitle";
import Button from "components/ui/button/Button"

const BestProducts = () => {
   return (
      <>
         <div className="best-top">
            <Subtitle name="This Month" title="Best Selling Products" />
            <Button>View All</Button>
         </div>
         <div className="best">
            <div className="best-list">
               {best.map((item) => (
                  <div className="best-column" key={item.id}>
                     <Product item={item} />
                  </div>
               ))}
            </div>
         </div>
      </>
   );
};

export default BestProducts;
