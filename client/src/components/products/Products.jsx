import Subtitle from "components/ui/subtitle/Subtitle";
import Product from "components/ui/product/Product";

import { products } from "./products.data";
import "./Products.scss";
import Button from "components/ui/button/Button"
import { Link } from "react-router-dom"

const Products = () => {
   return (
      <section className="products">
         <Subtitle name="Our Products" title="Explore Our Products" />
         <div className="products-list">
            {products.map((item) => (
               <div className="products-column" key={item.id}>
                  <Product item={item} />
               </div>
            ))}
         </div>
         <Button classNames="center">
            <Link to="/">View All Products</Link>
         </Button>
      </section>
   );
};

export default Products;
