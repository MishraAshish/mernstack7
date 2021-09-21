import React, {Fragment} from "react";

let Footer = (props)=>{ //functional component
    // props.name = "New Name";

    return(
        <div className="footer">
                © Copyright 2019 All rights reserved. &nbsp;|&nbsp; <a href="https://www.synergisticit.com/" target="_blank">SynergisticIT</a> &nbsp;|&nbsp; <a href="http://www.synergisticit.com/sitemap.xml" target="_blank">Sitemap</a>
                {/* {`This is footer component. Received address through props is ${props.address} and Name is ${props.name}
                ${props.user.name}
                ${props.user.pwd}
                `}

                {props.children[0]}
                {props.children[1]} */}
        </div>
     )
}

export default Footer;

//Create - a state in app or any parent class component (bestfriend)
//Create child functional component with DummyName
//To Dummy component pass the bestfriend name as props
//Also try to change the name on click event (in app js) 

//Also create functional components to receive props inline and as child