import React, {Fragment} from 'react';

export default function Header(props) {
    let someVal = 2==3&&5;
    let myName = "React Geek on earth"
    return(
       <Fragment>
            <h2>This is Header Component 1</h2>
            {someVal}
            {3==3&&5}
            {myName}
            myName
        </Fragment>
    )
}