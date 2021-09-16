import React from "react";

import Footer from "./CommonComponents/FooterComponent";
import Header from "./CommonComponents/HeaderComponent";
import Home from "./CommonComponents/HomeComponent";

export const myname = "Test";

export default class AppComponent extends React.Component {

    constructor(props, context){
        super(props);
        this.state = {
            currentDate : new Date().toDateString(),
            showChildren : false
        }
        //this.updateDateTime();
        
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
        console.log("Render to generate VDom")
        return(
            <div>
                <Home showChildren={this.state.showChildren}/>
                <button onClick={this.updateDateTime}>I am button to show Children in props!</button>
                
                {/* <Header />
                <h1>This Component is loaded from react app Component</h1>
                
                {this.state.currentDate}
                <Footer /> */}
            </div>
        )
    }
}