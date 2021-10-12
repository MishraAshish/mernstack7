import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import "./app.css";
import './bootstrap.min.css';
//npm install react-bootstrap@next bootstrap@5.1.1

import Footer from "./CommonComponents/FooterComponent";
import Header from "./CommonComponents/HeaderComponent";
import Home from "./CommonComponents/HomeComponent";
import About from "./CommonComponents/AboutComponent";
import NotFound from "./CommonComponents/NotFoundComponent";
import UserHook from "./ApplicationComponents/Components/User/UserComponentHooks";
// import User from "./ApplicationComponents/Container/User/UserContainer";
import Product from "./ApplicationComponents/Components/Product/ProductComponent";
import DisplayProduct from "./ApplicationComponents/Components/Product/DisplayProduct";
import CartComponent from "./ApplicationComponents/Components/Cart/CartComponent";
import CheckoutComponent from "./ApplicationComponents/Components/Checkout/CheckoutComponent";
import Coupon from "./ApplicationComponents/Components/Coupon/CouponComponent";

export default class AppComponent extends React.Component {

    constructor(props, context){
        super(props);
        this.state = {
            currentDate : new Date().toDateString(),
            showChildren : false
        }
        //this.updateDateTime();
        this.sessionName; //= "MERNStack";
    }

    // setInterval = setInterval(() => {
    //     this.setState({ //this is a call back based api to make changes
    //         currentDate : new Date().toDateString(),//.toLocaleTimeString()
    //         showChildren : true
    //     }) 
    // }, 1000);

    updateDateTime = ()=>{
        let newDate = new Date().toLocaleTimeString()
        console.log("Clicked")
        this.setState({
            currentDate : newDate,
            showChildren : !this.state.showChildren
        }) 
    }

    render(){
        console.log("Render to generate VDom");
        let admin = false;

        return(
            <Router>
                <Header />

                <Switch>
                    <Route path="/" exact render={()=> (admin ? (<Redirect to="/home" />) : (<UserHook/> ))} />
                    <Route path="/home" exact component={Home}></Route>
                    <Route path="/userhook" exact component={UserHook}></Route>
                    <Route path="/cart" exact component={CartComponent}></Route>
                    <Route path="/Product" exact component={Product}></Route>
                    <Route path="/display" exact component={DisplayProduct}></Route>
                    <Route path="/checkout" exact component={CheckoutComponent}></Route>
                    <Route path="/coupon" exact component={Coupon}></Route>
                    <Route path="/about" exact component={About}></Route>
                    <Route path="/about/:id" exact component={About}></Route>

                    <Route path="/" exact component={Home}></Route>
                    <Route path="*" component={NotFound}></Route>
                </Switch>

                {/* <button onClick={this.updateDateTime}>I am button to show Children in props!</button> */}

                <Footer />
            </Router>
        )
    }
}