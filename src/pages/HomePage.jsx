import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/use-auth";
import { removeUser } from "store/slices/userSlice";
import ProductsItems from 'components/products/ProductsItems'

const HomePage = () => {
   const dispatch = useDispatch();

   const { isAuth, email } = useAuth();

   return  (
      <div>
         <ProductsItems/>

         <button onClick={() => dispatch(removeUser())}>
            Log out from {email}
         </button>

      </div>
   ) 
};

export default HomePage;
