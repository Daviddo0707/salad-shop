import React from "react";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import Ingredients from "./pages/Ingredients";
import Checkout from "./pages/Checkout";
import history from "./history";
import { Route, Router, Switch, Redirect } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/ingredients" exact component={Ingredients} />
          <Route path="/checkout" exact component={Checkout} />
          <Route render={() => <Redirect to={{ pathname: "/" }} />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
