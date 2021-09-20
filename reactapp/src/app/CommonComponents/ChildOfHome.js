import React from 'react';

//this component will send data back to parent - Home
let ChildComponent = (props) => {
    
    return(
        <React.Fragment>
            <h1>Child Component</h1>
            <input type="button" onClick={()=>props.sendBackToHome("React")} value="send back to parent" />
        </React.Fragment>
    )

}

export default ChildComponent;