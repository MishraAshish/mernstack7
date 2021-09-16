import React, {Fragment} from "react";


let Footer = (props)=>{
    //props are readonly objects which child can use but not modify
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

//Create - a state in app or any parent class component (bestfriend)
//Create child functional component with DummyName
//To Dummy component pass the bestfriend name as props
//Also try to change the name on click event (in app js) 

//Also create functional components to receive props inline and as child