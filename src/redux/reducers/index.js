import bearerToken from "./bearerToken";
import {combineReducers} from "redux";
import refreshToken from "./refreshToken";

export default combineReducers({ bearerToken, refreshToken });