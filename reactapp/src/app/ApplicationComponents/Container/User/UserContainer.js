import { connect } from "react-redux"; //will allow us to connect to store by being a subscriber or publisher
import UserComponent from "../../Components/User/UserComponent";

import {addUserToStore, signinUpuser} from "../../../State/User/UserAction";
//subscriber
let mapStateToProps = (state)=>{ //mapStoreToProps - will map the states present in store in the prop object of user component
    return {
        user : state.userReducer.user // left (props available in comp) : right (reading data from initialstate store/reducer)
    }
}

//publisher
let mapDispatchToProps = (dispatch)=>{
    return {
        addUser : (user)=>{
            dispatch(addUserToStore(user))
        },
        loginUserDb : (user)=>{
            dispatch(signinUpuser(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);