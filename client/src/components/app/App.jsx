import Spinner from "components/ui/spinner/Spinner";
import PageNotFound from "pages/404";
import LogInPage from "pages/LogInPage";
import MainPage from "pages/MainPage";
import SignUpPage from "pages/SignUpPage";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
   return (
      <main>
         <Suspense fallback={<Spinner />}>
            <Routes>
               <Route path="/" element={<MainPage />} />

               <Route path="/sign-in" element={<SignUpPage />} />
               <Route path="/log-in" element={<LogInPage />} />

               <Route path={"*"} element={<PageNotFound />} />
            </Routes>
         </Suspense>
      </main>
   );
};

export default App;