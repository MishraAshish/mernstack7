import React, {Fragment,  Component} from "react";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import PropTypes from "prop-types";


export default class Home extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            searchParam : "I have not searched anything"
        }
    }

    searchFunction = (evt) => {
        let target = evt.target;
        //console.log("target ", target);
        //this.state.searchParam = target.value;

        this.setState({ // a callback api provided by react to communicate to react rendering engine that it needs re-render
            searchParam : target.value
        }) //being a call back we don't see the changes immediatly

        //console.log("searchParam ", this.state.searchParam);
    }

    render(){
        let footerMsg = "I am footer for this application";

        console.log("Render Home")

        return(
            <Fragment>
                <Header />
                <h1>This is my Home Component for - {this.props.sessionName}</h1>

                <input type="text" value={this.state.searchParam} placeholder="Please type something to search" 
                    onChange={this.searchFunction}/>

                <Footer msg={footerMsg} show={this.props.showChildren}>
                    <h4>Child Element 2</h4>
                    <h4>Child Element 3</h4>
                    <h4>Child Element 4</h4>
                </Footer>
            </Fragment>
        )
    }
}

// Home.defaultProps = {
//     sessionName : "Default Session Name"
// }

Home.propTypes = {
    sessionName : PropTypes.string.isRequired
}