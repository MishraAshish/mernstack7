//console.log("This is hello world from console!")
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./app/app";
import Store from './app/state/store';

render(
    <Provider store={Store}>
        <App/>
    </Provider>
    , //bootstrapping the application component to show on main page
    document.getElementById("root") //finding the root element that acts as a container
)