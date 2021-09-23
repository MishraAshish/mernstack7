import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

function Header(props) {
    return(
       <Fragment>
           <h2>{`UserName ${props.user.userName}`}</h2>
           <NavLink to="/home" className="button" activeClassName="success" >Home </NavLink>             
           <NavLink to="/user" className="button" activeClassName="success" >User </NavLink>             
           <NavLink to="/about" className="button" activeClassName="success" >About </NavLink>
        </Fragment>
    )
}


let mapStateToProps = (state)=>{
    return {
        user : state.userReducer.user
    }
}

export default connect(mapStateToProps, null)(Header);