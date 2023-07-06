import Product from "components/ui/product/Product"
import Subtitle from "components/ui/subtitle/Subtitle"

import { products } from "./allproducts.data"
import "./AllProducts.scss";

const AllProducts = () => {
   return (
      <section className="products">
         <Subtitle name="Products" title="All Products" />
         <div className="products-list">
            {products.map((item) => (
               <div className="products-column" key={item.id}>
                  <Product item={item} />
               </div>
            ))}
         </div>
      </section>
   );
};

export default AllProducts;
