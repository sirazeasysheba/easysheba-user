import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useLocation } from "react-router";
import AllServices from "./components/AllServices/AllServices";
import Home from "./components/Home/Home";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import VideoModal from "./components/UI/VideoModal";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Policy from "./pages/Policy";
import SignUp from "./pages/SignUp";
import { isUserLoggedIn } from "./redux/actions/auth.actions";
import "./styles/style.scss";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { getAllCategory, getAllService, getProducts } from "./redux/actions";
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

//import "swiper/scss/pagination";
// import "swiper/scss/navigation";
function App() {
  const auth = useSelector((state) => state.auth);
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
  }, []);
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
        <PrivateRoute exact path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute exact path="/checkout">
          <Checkout />
        </PrivateRoute>
        <PrivateRoute exact path="/order-payment">
          <OrderPayment />
        </PrivateRoute>
        <PrivateRoute exact path="/orders">
          <Orders />
        </PrivateRoute>
        <PrivateRoute exact path="/order-details">
          <OrderDetails />
        </PrivateRoute>
        <PrivateRoute exact path="/profile">
          <Profile />
        </PrivateRoute>
        <PrivateRoute exact path="/user/setting">
          <Setting />
        </PrivateRoute>
        <Route exact path="/video">
          <VideoModal />
        </Route>
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
      <Footer />
    </div>
  );
}

export default App;
