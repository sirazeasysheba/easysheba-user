import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useLocation } from "react-router";
import AllServices from "./components/AllServices/AllServices";
import Home from "./components/Home/Home";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./pages/Login";
import Policy from "./pages/Policy";
import SignUp from "./pages/SignUp";
import { isUserLoggedIn } from "./redux/actions/auth.actions";
import "./styles/style.scss";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "react-toastify/dist/ReactToastify.css";
import MessengerCustomerChat from "react-messenger-customer-chat";
import {
  getAddress,
  getAllCategory,
  getAllService,
  getCartItems,
  getOrders,
  getProducts,
  updateCart,
} from "./redux/actions";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import OrderPayment from "./pages/OrderPayment";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Helps from "./pages/Helps";
import Career from "./pages/Career";

//import "swiper/scss/pagination";
// import "swiper/scss/navigation";
function App() {
  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    dispatch(getAllCategory());
    dispatch(getAllService());
    dispatch(getProducts());
    dispatch(updateCart());
    // dispatch(getCartItems());
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(getCartItems());
      dispatch(getAddress());
    }
  }, [token]);

  useEffect(() => {
    dispatch(getOrders());
  }, [cart.cartItems]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <PrivateRoute exact path="/checkout">
          <Checkout />
        </PrivateRoute>
        <PrivateRoute exact path="/order-payment">
          <OrderPayment />
        </PrivateRoute>
        <PrivateRoute exact path="/orders">
          <Orders />
        </PrivateRoute>
        <PrivateRoute path="/order/:id">
          <OrderDetails />
        </PrivateRoute>
        <PrivateRoute exact path="/profile">
          <Profile />
        </PrivateRoute>
        <PrivateRoute exact path="/user/setting">
          <Setting />
        </PrivateRoute>
        <Route exact path="/all-services">
          <AllServices />
        </Route>
        <Route exact path="/privacy-policy">
          <Policy />
        </Route>
        <Route exact path="/terms-conditions">
          <Terms />
        </Route>
        <Route exact path="/help">
          <Helps />
        </Route>
        <Route exact path="/career">
          <Career />
        </Route>
        <Route exact path="/about-us">
          <About />
        </Route>
        <Route path="/services/:slug">
          <ProductDetails />
        </Route>
        <Route path="/*">
          <NotFound />
        </Route>
      </Switch>
      <MessengerCustomerChat
        pageId="102826721297012"
        appId="<APP_ID>"
        htmlRef="<REF_STRING>"
      />
      ,
      <Footer />
    </div>
  );
}

export default App;
