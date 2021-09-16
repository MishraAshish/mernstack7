import React, {Fragment} from "react";


let Footer = (props)=>{
    //props.children - array of elements passed from parent as child
    return(
        <Fragment>
             <h1>{props.msg} </h1>
            {props.show ? props.children[0] : ""}
            {props.children[1]}
            {props.children[2]}
        </Fragment>
    )
}

export default Footer;