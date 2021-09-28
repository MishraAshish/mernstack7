//reacthooks - useState, useReducer, useRef, useEffect, useLayoutEffect, useCallBack, useContext, useMemo...
//react-redux - useSelector, useDispatcher
//react.memo - memoization of react components to save the re-renders

import React, {Fragment, useRef, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import {addUserToStore, signinUpuser} from "../../../State/User/UserAction";

let User = (props)=>{

    const inputUserName = useRef(null);
    const inputPassword = useRef(null);
    const inputStreet = useRef(null);
    const inputMobile = useRef(null);

    // to make our component subscribe to the store we need to use - useSelector and then
    // select the state with which we want to map our data (mapStateToProps)
    const user = useSelector((state)=>state.userReducer.user)

    // this hook is used to replace map dispatch to props so that we are able to 
    // make our functional component publish the new data
    //this hook is used to do the job of mapDispatchToProps, we need to initilize it and then use it on handler
    const dispatchToSignin = useDispatch();

    const setInt= setInterval(() => {
        console.log("My name is Something")
    }, 1000);

    // replacemnet of shouldComponentUpdate or componentDidMount
    useEffect(()=>{
        //console.log(user)        
        inputUserName.current.value = user.userName;        
        inputPassword.current.value = user.password;
        inputStreet.current.value = user.street;
        inputMobile.current.value = user.mobile;

        //componentWillUnmount
        return function cleanup() {
            //we must avoid doing any data cleanup, it is for javascript functions, callbacks, 
            console.log("useEffect is working as component will unmount, to cleanup the component");
            clearInterval(setInt); //cleaning up interval call
        };
    })

    //for cleanup - componentWillUnmount
    // useEffect(()=>{
    //  // Specify how to clean up after this effect:
    //  return function cleanup() {
    //     console.log("useEffect is working as component will unmount, to cleanup the component")
    //   };
    // })


    //submit handler to signinup user
    const handleSubmit = (evt)=>{
        // `current` points to the mounted text input element
        
        let userObj = {
            userName : inputUserName.current.value,
            password : inputPassword.current.value,
            street : inputStreet.current.value,
            mobile : inputMobile.current.value,
        }
        //alert("User Object :" + JSON.stringify(userObj))

        //dispatchToSignin(addUserToStore(userObj))
        // this hook is used to replace map dispatch to props so that we are able to 
        // make our functional component publish the new data
        dispatchToSignin(signinUpuser(userObj))

        evt.preventDefault();
    }
    console.log("user hook render ")
    return(
        <Fragment>
            <h1>Login User</h1>
            <form className={"form col-md-10 userHook"} onSubmit={handleSubmit}>                
                <label>
                    <b>User Name :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inputUserName} 
                            placeholder="Please enter user name" maxLength={25}/>
                </label>
                <br/>
                <label>
                    <b>Password :</b>
                    <input type="password" className={"form-control col-md-12"} ref={inputPassword} 
                            placeholder="Please enter password" maxLength={25}/>
                </label>
                <br/>
                <label>
                    <b>Street :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inputStreet} 
                            placeholder="Please enter address" maxLength={25}/>
                </label>
                <br/>
                <label>
                    <b>Mobile :</b>
                    <input type="number" className={"form-control col-md-12"} ref={inputMobile} 
                            placeholder="Please enter mobile" />
                </label>

                <br/>
                <input type="submit" className={"btn btn-primary"} value="Signin" />
            </form>
        </Fragment>
    )
}

//React.memo - is an optimization extension of react which does shallow equal of props to save re-render
export default React.memo(User);
//export default User;