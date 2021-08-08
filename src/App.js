import React from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import Header from "./components/Header";
import { routes } from "./routes";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        {routes.map(({ path, component }) => (
          <Route path={path} exact key={path}>
            {component}
          </Route>
        ))}
        <Route render={() => <Redirect to={{ pathname: "/" }} />} />
      </Switch>
    </Router>
  );
};

export default App;
