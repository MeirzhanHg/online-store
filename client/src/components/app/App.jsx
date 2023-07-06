import Spinner from "components/ui/spinner/Spinner";
import PageNotFound from "pages/404";
import AllProductsPage from "pages/AllProductsPage"
import CartPage from "pages/CartPage"
import LogInPage from "pages/LogInPage";
import MainPage from "pages/MainPage";
import SignUpPage from "pages/SignUpPage";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
   return (
      <Suspense fallback={<Spinner />}>
         <Routes>
            <Route path="/" element={<MainPage />} />

            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/all-products" element={<AllProductsPage />} />
            <Route path="/cart" element={<CartPage />} />

            <Route path={"*"} element={<PageNotFound />} />
         </Routes>
      </Suspense>
   );
};

export default App;
