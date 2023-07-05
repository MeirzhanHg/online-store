import Auth from "components/auth/Auth";
import Layout from "components/layout/Layout";

const LogInPage = () => {
   return (
      <Layout>
         <Auth title="Log in to Exclusive" question='Are you not registered yet?' text='Log in' isNameRequired link='sign-up'/>
      </Layout>
   );
};

export default LogInPage;
