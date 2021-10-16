import { Route, Switch } from "react-router";
import Home from "./components/Home/Home";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "./styles/style.scss";

function App() {
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
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
