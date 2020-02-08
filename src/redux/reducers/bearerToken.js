import {SET_BEARER} from "../actionTypes";

const initialState = '';

export default function (state = initialState, action) {
    console.log("Current State: ", state);
    switch (action.type) {
        case SET_BEARER: {
            console.log("Action: ", action.payload.bearerToken);
            return action.payload.bearerToken;
        }
        default:
            return state;
    }
}