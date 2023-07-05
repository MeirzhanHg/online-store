import Layout from 'components/layout/Layout'
import Auth from 'components/auth/Auth'

const SignUpPage = () => {
 return (
   <Layout signUp>
      <Auth title='Create an account' question='Already have account?'  text='Create Account' link='login'/>
   </Layout>
 )
}

export default SignUpPage