import React, {Fragment,  Component, PureComponent} from "react";
// import Footer from "./FooterComponent";
// import Header from "./HeaderComponent";
import PropTypes from "prop-types";
import ChildComponent from "./ChildOfHome";

export default class Home extends PureComponent {
//export default class Home extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            searchParam : "I have not searched anything",
            sessionName : "MERNStack"
        }

        //ref - keyword uses
        this.inputAddress = React.createRef(); //as we dont have any html selectors available in react so this provides a reference to html
        //this.inputAddress.current.focus(); //view can't be accessed in constructor
        this.inputAge = React.createRef();
    }

    //creation life cycle method
    componentDidMount(){
        console.log("componentDidMount")
        //view is accessible
        setTimeout(() => {
            this.inputAddress.current.focus();
            this.inputAddress.current.value = "Added Value";   
            
        }, 3000);
    }

    //destruction life cycle methods
    componentWillUnmount(){
        console.log("componentWillUnmount");
        //previous component needs to clear all subscriptions and any pending calls while navigating to other component
    }
    
    //update lifecycle method
    //this asks us to decide whether we need to stop calling the render method on state change
    // shouldComponentUpdate(nextState, nextProps) {
    //     console.log("shouldComponentUpdate");
    //     console.log("nextState",nextState);
    //     console.log("nextProps", nextProps);
        
    //     //return true;
    //     if (nextProps.searchParam == this.state.searchParam) {
    //         return false; //to not call the render method
    //     } else {
    //         return true;    
    //     }
    // }

    getSnapshotBeforeUpdate(prevState, prevProps){
        console.log("getSnapshotBeforeUpdate");
        console.log("prevState", prevState);
        console.log("prevProps", prevProps);
        return {
            prevState,
            prevProps
        }
    }

    componentDidUpdate(prevState, prevProps){
        console.log("componentDidUpdate");
        console.log("prevState",prevState);
        console.log("prevProps", prevProps);
    }


    searchFunction = (evt) => {
        let target = evt.target;
        //console.log("target ", target);
        //this.state.searchParam = "I have not searched anything"//target.value;

        //this.forceUpdate(); //this make react render call but skips the lifecycle method

        this.setState({ // a callback api provided by react to communicate to react rendering engine that it needs re-render
           searchParam : "I have not searched anything"//target.value
        }) //being a call back we don't see the changes immediatly

        //console.log("searchParam ", this.state.searchParam);
    }

    readDataFromChild = (name) =>{
        //alert("This is coming from child "+ name)
        this.setState({
            sessionName:name
        })

        this.inputAddress.current.value = name;
    }

    render(){
        let footerMsg = "I am footer for this application";

        console.log("Render Home")

        return(
            <Fragment>
                
                <h1>This is my Home Component for - {this.props.sessionName}</h1>

                <input type="text" value={this.state.searchParam} placeholder="Please type something to search" 
                    onChange={this.searchFunction}/>

                <label>
                    Address:
                         <input type="text" ref={this.inputAddress} placeholder="Please enter Address"/>
                </label>
                
                
                
                <b>{this.state.sessionName}</b>  
                
                <br/>
                <ChildComponent sendBackToHome = {this.readDataFromChild}/>             
            </Fragment>
        )
    }
}

// Home.defaultProps = {
//     sessionName : "Default Session Name"
// }

// Home.propTypes = {
//     sessionName : PropTypes.string.isRequired
// }



//Create a component with your name (first)
//Show all lifecycle hooks that have been discussed
//Create another example with Pure component
//Make that pure component child of first component
//Pass a event/function as a prop to Child component and use it to send data back, and show update 
//use ref keyword to access one element in first component