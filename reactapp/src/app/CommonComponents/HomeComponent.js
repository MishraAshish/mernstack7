import React, {Fragment,  Component, PureComponent} from "react";
import PropTypes from "prop-types";
import ChildComponent from "./ChildOfHome";

export default class Home extends PureComponent {
//export default class Home extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            searchParam : "I have not searched anything",
            sessionName : "MERNStack",
            age : "",
            address : ""
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
        // setTimeout(() => {
        //     this.inputAddress.current.focus();
        //     this.inputAddress.current.value = "Added Value";   
            
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

    readDataFromChild = (name) =>{
        //alert("This is coming from child "+ name)
        this.setState({
            sessionName:name
        })

        this.inputAddress.current.value = name;
    }

    handleSubmit = (evt)=>{
        let age = this.inputAge.current.value;
        let address = this.inputAddress.current.value;

        this.setState({
            age,
            address
        })

        evt.preventDefault(); //to stop the default behaviour of form submission to server
    }

    render(){
        console.log("Render Home")
        return(
            <div className={"loadimage form"} style={{backgroundImage: "url(/images/hm_pic4.jpg)"}}>
                    {/* <p>{this.state.name}</p> */}
                    {/* <img src={"./images/hm_pic4.jpg"} /> */}
                    {/* {this.state.Title} */}
                    <b className="feature">{"Below Feature's We've Implemented in our project :"}</b>
                    <ul>                     
                        <li>Sign up new users</li>
                        <li>Login existing users.</li>
                        <li>Add products/items to create product collection.</li>
                        <li>Allow user's to add to cart.</li>
                        <li>Save the user's cart.</li>
                        <li>Checkout and pay for items.</li>
                        <li>Allow users to cancel the order.</li>
                        <li>Allow users to reorder the cart.</li>
                        <li>Allow users to give ratings to each product.</li>
                        <li>Have notifications on top right with logout.</li>
                    </ul>
                    {/* <label>
                    Address:
                         <input type="text" ref={this.inputAddress} placeholder="Please enter age"/>
                     </label> */}
                    <button className={"form-control btn btn-primary col-md-2"} onClick={()=> this.props.history.push("/about/2500")}>GoTo About Page</button>
                    
                    <button className={"form-control btn btn-primary col-md-2"} onClick={()=> this.props.history.push("/LearnHooks")}>GoTo User Hooks</button>
                    
                    {/* <img  src="/images/hm_pic4.jpg"/> */}

                    {/* controlled Component implementation using ref keyword */}
                    <form onSubmit={this.handleSubmit}>
                       <label>
                         Address:
                           <input type="text" ref={this.inputAddress} placeholder="Please enter address"/>
                       </label>
                      
                       <label>
                         Age:
                           <input type="text" ref={this.inputAge} placeholder="Please enter age"/>
                         </label>

                       <input type="submit" value="Submit" />
                  </form>
                    <label>
                         Address:
                           {this.state.address}
                    </label>
                    <label>
                         Age:
                         {this.state.age}
                    </label>
                    {/*
                    <input type="text" placeholder="Please enter your name" 
                            value={this.state.name} 
                            onChange={this.changeNameOnType}/>

                    <button className={"form-control btn btn-primary col-md-2"} 
                        onClick={this.updateNameEvent}>Update Name</button>
                    <Dummy name={this.state.name} updateName={this.updateNameAsCallBk}/> */}
                </div>
        )
    }
}

// Home.defaultProps = {
//     sessionName : "Default Session Name"
// }

// Home.propTypes = {
//     sessionName : PropTypes.string.isRequired
// }



