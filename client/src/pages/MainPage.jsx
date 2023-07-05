import Layout from "components/layout/Layout";
import Sale from "components/sale/Sale";
import Category from "components/category/Category"
import BestProducts from "components/best_products/BestProducts"

const MainPage = () => {
   return (
      <Layout>
         <div className="container">
            <Sale />
            <Category />
            <BestProducts />
         </div>
      </Layout>
   );
};

export default MainPage;
