import Layout from "components/layout/Layout";
import Sale from "components/sale/Sale";
import Category from "components/category/Category";
import BestProducts from "components/best_products/BestProducts";
import Music from "components/music/Music";
import Products from "components/products/Products";
import Catalog from "components/catalog/Catalog";
import Delivery from "components/delivery/Delivery";
import Hero from "components/hero/Hero";

const MainPage = () => {
  return (
    <Layout>
      <div className="container">
        <Hero />
        <Sale />
        <Category />
        <BestProducts />
        <Music />
        <Products />
        <Catalog />
        <Delivery />
      </div>
    </Layout>
  );
};

export default MainPage;
