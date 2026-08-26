import { createBrowserRouter } from "react-router";
import MainLayout from "./Layouts/MainLayout";
import DashboardLayout from "./Layouts/DashboardLayout";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Error from "./pages/Error/Error";
import Categories from "./pages/Categories/Categories";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import OrderSuccess from "./pages/OrderSuccess/OrderSuccess";
import OrderDetail from "./pages/OrderDetail/OrderDetail";
import Orders from "./pages/Orders/Orders";
import WishList from "./pages/WishList/WishList";
import NotFound from "./pages/NotFound/NotFound";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import DashboardProducts from "./pages/Admin/Products/DashboardProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: Error,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "products/:id", Component: ProductDetail },
      { path: "categories", Component: Categories },
      { path: "cart", Component: Cart },
      { path: "checkout", Component: Checkout },
      { path: "orders", Component: Orders },
      { path: "order-success", Component: OrderSuccess },
      { path: "order-detail", Component: OrderDetail },
      { path: "wishlist", Component: WishList },
      { path: "*", Component: NotFound },
    ],
  },
  {
    path: "dashboard",
    Component: DashboardLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "products", Component: DashboardProducts },
    ],
  },
]);
