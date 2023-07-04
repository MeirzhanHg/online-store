import Layout from 'components/layout/Layout'
import Auth from 'components/auth/Auth'

const SignUpPage = () => {
 return (
   <Layout signUp>
      <Auth title='Create an account' text='Create Account'/>
   </Layout>
 )
}

export default SignUpPage