import React from "react";

import "./app.css";
import Footer from "./CommonComponents/FooterComponent";
import Header from "./CommonComponents/HeaderComponent";
import Home from "./CommonComponents/HomeComponent";
import About from "./CommonComponents/AboutComponent";
import NotFound from "./CommonComponents/NotFoundComponent";
//import User from "./ApplicationComponents/Components/User/UserComponent";
import User from "./ApplicationComponents/Container/User/UserContainer";

import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
export const myname = "Test";

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
                    <Route path="/" exact render={()=> (admin ? (<Redirect to="/home" />) : (<About/> ))} />
                    <Route path="/home" exact component={Home}></Route>
                    <Route path="/user" exact component={User}></Route>
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


//redux -
//store - single source of truth (collection of all the states)
//actions - object {} //type (saveuser) and payload (userobject), actiontypes
//reducers - this is to create intial state and new state upon any ation getting dispatched
//dispather - to take action to store(reducer)
//action creator - html element with we raise the action

//react-redux -
//will use to get store in our react components so usage will in container

//redux thunk - as middleware
//to make call to server

//promise middle ware to use

//api's
// signinupuser api

//npm install react-redux redux redux-promise-middleware redux-thunk