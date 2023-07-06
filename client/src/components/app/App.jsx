import { Suspense, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Spinner from "components/ui/spinner/Spinner";
import PageNotFound from "pages/404";

import { Context } from "index";

import { authRoutes } from "./routes";
import { publicRoutes } from "./routes";

const App = () => {
   const { user } = useContext(Context);
   console.log(user);

   return (
      <Suspense fallback={<Spinner />}>
         <Routes>
            {user.isAuth &&
               authRoutes.map(({ path, Component }) => {
                  console.log(path);
                return   <Route key={path} path={path} element={<Component />} />
               }
               )}

            {publicRoutes.map(({ path, Component }) => (
               <Route key={path} path={path} element={<Component />} />
            ))}

            <Route path="*" element={<PageNotFound />} />
         </Routes>
      </Suspense>
   );
};

export default App;
