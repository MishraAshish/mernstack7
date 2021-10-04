import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

function Header(props) {
    let userName = props.user.userName; //reading from userReducer

    return(
        <Fragment>
             Hi <b>{userName +", "}</b> Welcome to SynergisticIT Shopping Cart 
                {userName == "" ?<b> Please Login to see other features</b>:""}
            <hr/>
            <NavLink to="/home" className="button" activeClassName="success" >Home </NavLink> 
            <NavLink to="/userhook" className="button" activeClassName="success" >{userName == "" ? "Login" : "User"} </NavLink> 
            {userName &&
                <React.Fragment> 
                    <NavLink to="/product" className="button" activeClassName="success" >Product </NavLink> 
                    <NavLink to="/cart" className="button" activeClassName="success" >Cart </NavLink>
                </React.Fragment>
            }
            <NavLink to="/about" className="button" activeClassName="success" >About </NavLink> 
        </Fragment>
    )
}

//subscriber 
let mapStateToProps = (state)=>{
    return {
        user : state.userReducer.user
    }
}

export default connect(mapStateToProps, null)(Header);