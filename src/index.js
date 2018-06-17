import * as React from "react";
import { render } from "react-dom";
import { Provider } from "mobx-react";

import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import { createStores } from "./newstore";


const stores = createStores();

render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
