import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import App from "./App";
import Loader from "./components/Loader";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.querySelector("#root")
);
