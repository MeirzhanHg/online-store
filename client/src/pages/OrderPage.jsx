import Layout from "components/layout/Layout";
import Order from "components/order/Order"

const OrderPage = () => {
   return (
      <Layout>
         <div className="container">
            <Order/>
         </div>
      </Layout>
   );
};

export default OrderPage;
