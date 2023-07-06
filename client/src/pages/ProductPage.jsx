import Details from "components/details/Details"
import Layout from "components/layout/Layout"
import { useParams } from "react-router-dom"

const ProductPage = () => {
   
   const { id } = useParams();

   return (
      <Layout>
         <div className="container">
            <Details id={id}/>
         </div>
      </Layout>
   )
};

export default ProductPage;
