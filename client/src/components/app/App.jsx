import { Suspense, useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Spinner from "components/ui/spinner/Spinner";
import PageNotFound from "pages/404";

import { Context } from "index";

import { authRoutes } from "./routes";
import { publicRoutes } from "./routes";
import ProductPage from "pages/ProductPage"
import { check } from "http/userApi"

const App = () => {
   const { user } = useContext(Context);
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      check().then(data => {
         console.log(data);
         user.setUser(true)
         user.setIsAuth(true)
      }).catch((e) => console.log(e)).finally(() => setLoading(false))
   }, [])

   return (
      <Suspense fallback={<Spinner />}>
         <Routes>
            {user.isAuth &&
               authRoutes.map(({ path, Component }) => {
                  return (
                     <Route key={path} path={path} element={<Component />} />
                  );
               })}

            {publicRoutes.map(({ path, Component }) => (
               <Route key={path} path={path} element={<Component />} />
            ))}

            <Route path="/allproducts/:id" element={<ProductPage />} />

            <Route path="*" element={<PageNotFound />} />
         </Routes>
      </Suspense>
   );
};

export default App;
