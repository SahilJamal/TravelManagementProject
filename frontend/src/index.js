import React from "react";
import ReactDOM from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/index.css";
import "./assets/styles/bootstrap.custom.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import store from "./store";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PrivateRoute from "./components/PrivateRoute";
import PaymentScreen from "./screens/PaymentScreent";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ForgotPassword from "./screens/ForgotPassword";
import ResetPassword from "./screens/ResetPassword";
import OrderScreen from "./screens/OrderScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AdminRoute from "./components/AdminRoute";
import OrderListScreen from "./screens/admin/OrderListScreen";
import ProductListScreen from "./screens/admin/ProductListScreen";
import ProductEditScreen from "./screens/admin/ProductEditScreen";
import UserListScreen from "./screens/admin/UserListScreen";
import UserEditScreen from "./screens/admin/UserEditScreen";
import AllGirlsTrips from "./screens/AllGirlsTrips";
import CorporateProgram from "./screens/CorporateProgram";
import NotFoundPage from "./screens/NotFoundPage";
import DestinationScreen from "./screens/DestinationScreen";
import ContactUsScreen from "./screens/ContactUsScreen";
import ActivityScreen from "./screens/ActivityScreen";
import ThemeScreen from "./screens/ThemeScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import CareerWithUs from "./screens/CareerWithUs";
import AddProductScreen from "./screens/admin/AddProductScreen";
import PaymentPolicy from "./screens/admin/PaymentPolicy";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="*" element={<NotFoundPage />} /> {/* Catch-all for 404 */}
      <Route path="/search/:keyword" element={<HomeScreen />} />
      <Route path="/page/:pageNumber" element={<HomeScreen />} />
      <Route
        path="/search/:keyword/page/:pageNumber"
        element={<HomeScreen />}
      />
      <Route path="/package/add" element={<AddProductScreen />} />
      <Route path="/payment" element={<PaymentPolicy />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/order/:id" element={<OrderScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/category/:keyword" element={<AllGirlsTrips />} />
      <Route path="/category/corporate" element={<CorporateProgram />} />
      <Route path="/destination/leh-ladakh" element={<DestinationScreen />} />
      <Route path="/activities/bungee-jumping" element={<ActivityScreen />} />
      <Route path="/themes/ladakh-tour-package" element={<ThemeScreen />} />
      <Route path="/contact" element={<ContactUsScreen />} />
      <Route path="/career" element={<CareerWithUs />} />
      <Route path="/about" element={<AboutUsScreen />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>
      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/orders" element={<OrderListScreen />} />
        <Route path="/admin/products" element={<ProductListScreen />} />
        <Route
          path="/admin/products/:pageNumber"
          element={<ProductListScreen />}
        />
        {/* <Route path="/admin/products/add" element={<AddProductScreen />} /> */}
        <Route path="/admin/users" element={<UserListScreen />} />
        <Route path="/admin/product/:id/edit" element={<ProductEditScreen />} />
        <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PayPalScriptProvider deferLoading={true}>
          <RouterProvider router={router} />
        </PayPalScriptProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
