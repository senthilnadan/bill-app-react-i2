import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/configureStore";
import "../node_modules/bootstrap3/dist/css/bootstrap.min.css";

const store = configureStore();

ReactDOM.render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReduxProvider>,

  document.getElementById("root")
);
