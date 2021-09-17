import React, {Fragment,  Component, PureComponent} from "react";
// import Footer from "./FooterComponent";
// import Header from "./HeaderComponent";
import PropTypes from "prop-types";


export default class Home extends PureComponent {
//export default class Home extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            searchParam : "I have not searched anything"
        }
    }

    //creation life cycle method
    componentDidMount(){
        console.log("componentDidMount")
        //view is accessible
        // setTimeout(() => {
        //     this.inputAddress.current.focus();
        //     this.inputAddress.current.value = "Added Value in Did Mount";   
            
        // }, 3000);
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

    render(){
        let footerMsg = "I am footer for this application";

        console.log("Render Home")

        return(
            <Fragment>
                
                <h1>This is my Home Component for - {this.props.sessionName}</h1>

                <input type="text" value={this.state.searchParam} placeholder="Please type something to search" 
                    onChange={this.searchFunction}/>

                
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