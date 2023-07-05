import Layout from "components/layout/Layout";
import Sale from "components/sale/Sale";
import Category from "components/category/Category"
import BestProducts from "components/best_products/BestProducts"
import Music from "components/music/Music"

const MainPage = () => {
   return (
      <Layout>
         <div className="container">
            <Sale />
            <Category />
            <BestProducts/>
            <Music/>
         </div>
      </Layout>
   );
};

export default MainPage;
