import Auth from "components/auth/Auth";
import Layout from "components/layout/Layout";

const LogInPage = () => {
   return (
      <Layout>
         <Auth title="Log in to Exclusive" text='Log in' isNameRequired/>
      </Layout>
   );
};

export default LogInPage;
