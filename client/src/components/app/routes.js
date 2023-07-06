import AdminPage from "pages/AdminPage";
import AllProductsPage from "pages/AllProductsPage";
import CartPage from "pages/CartPage";
import LogInPage from "pages/LogInPage";
import SignUpPage from "pages/SignUpPage";
import MainPage from "pages/MainPage";
import OrderPage from "pages/OrderPage";

export const authRoutes = [
  {
    path: "/admin",
    Component: AdminPage,
  },
  {
    path: "/order",
    Component: OrderPage,
  },
  {
    path: "/cart",
    Component: CartPage,
  },
];

export const publicRoutes = [
  {
    path: "/",
    Component: MainPage,
  },
  {
    path: "/all-products",
    Component: AllProductsPage,
  },
  {
    path: "/login",
    Component: LogInPage,
  },
  {
    path: "/sign-up",
    Component: SignUpPage,
  },
  // {
  //    path: DEVICE_ROUTE + '/:id',
  //    Component: DevicePage
  // },
];
