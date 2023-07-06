import Auth from "components/auth/Auth";
import Layout from "components/layout/Layout";

const LogInPage = () => {
   return (
      <Layout>
         <Auth title="Войти" question='Нету аккаунта?' text='Войти' isNameRequired link='sign-up'/>
      </Layout>
   );
};

export default LogInPage;
