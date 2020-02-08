import {SET_REFRESH} from "../actionTypes";

const initialState = '';

export default function (state = initialState, action) {
    console.log("Current State: ", state);
    switch (action.type) {
        case SET_REFRESH: {
            console.log("Action: ", action.payload.refreshToken);
            return action.payload.refreshToken;
        }
        default:
            return state;
    }
}
