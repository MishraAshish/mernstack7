import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";

export default function Header(props) {
    let someVal = 2==3&&5;
    let myName = "React Geek on earth"
    return(
       <Fragment>
           <NavLink to="/home" className="button" activeClassName="success" >Home </NavLink>             
           <NavLink to="/about" className="button" activeClassName="success" >About </NavLink>

            <h2>This is Header Component 1</h2>
            {someVal}
            {3==3&&5}
            {myName}
            myName
        </Fragment>
    )
}