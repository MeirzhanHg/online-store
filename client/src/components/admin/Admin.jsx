import { Context } from "index"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import './Admin.scss'

const Admin = () => {
   const {user} = useContext(Context)
   const navigate = useNavigate()

   const logOut = () => {
       user.setUser({})
       user.setIsAuth(false)
       navigate('/')
   }
   return (
      <button onClick={() => logOut()}>Log Out</button>
   )
}

export default Admin