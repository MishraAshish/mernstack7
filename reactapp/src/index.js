console.log("This is hello world from console!")

import React from "react";
import {render} from "react-dom";

import AppComponent from "./app/app";

render(
    <AppComponent/>, //bootstrapping the application component to show on main page
    document.getElementById("root") //finding the root element that acts as a container
)