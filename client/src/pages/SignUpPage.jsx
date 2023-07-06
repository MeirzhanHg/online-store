import Layout from 'components/layout/Layout'
import Auth from 'components/auth/Auth'

const SignUpPage = () => {
 return (
   <Layout signUp>
      <Auth title='Создать аккаунт' question='Уже есть аккаунт?'  text='Создать' link='login'/>
   </Layout>
 )
}

export default SignUpPage