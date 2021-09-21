import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";

export default function Header(props) {
    return(
       <Fragment>
           <NavLink to="/home" className="button" activeClassName="success" >Home </NavLink>             
           <NavLink to="/about" className="button" activeClassName="success" >About </NavLink>
        </Fragment>
    )
}