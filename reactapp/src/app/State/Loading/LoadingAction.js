import * as ActionTypes from "../ActionTypes";

//loading action
export const loading = (showHide) => ({        
    type: ActionTypes.SHOW_LOADING,
    payload: showHide
});