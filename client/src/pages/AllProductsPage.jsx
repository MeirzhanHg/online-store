import AllProducts from "components/all_products/AllProducts"
import Layout from "components/layout/Layout";

const AllProductsPage = () => {
   return (
      <Layout>
         <div className="container">
            <AllProducts/>
         </div>
      </Layout>
   );
};

export default AllProductsPage;
