import Layout from "components/layout/Layout";
import PageNotFoundContent from "components/page_not_found/PageNotFoundContent";

const PageNotFound = () => {
   return (
      <Layout>
         <div className="container">
            <PageNotFoundContent />
         </div>
      </Layout>
   );
};

export default PageNotFound;
