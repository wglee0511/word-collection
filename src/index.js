import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import store from "./redux/configStore";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.render(
  <HelmetProvider>
    <Router>
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </Router>
  </HelmetProvider>,

  document.getElementById("root")
);
