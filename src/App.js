import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router";
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
//import "swiper/swiper.scss";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { getAllCategory } from "./redux/actions";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";

//import "swiper/scss/pagination";
// import "swiper/scss/navigation";
function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    dispatch(getAllCategory());
  }, []);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/product-details">
          <ProductDetails />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <PrivateRoute exact path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute exact path="/checkout">
          <Checkout />
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
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
