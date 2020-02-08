import {SET_BEARER, SET_REFRESH} from "./actionTypes";

export const setBearer = bearerToken => ({
    type: SET_BEARER,
    payload: {
        bearerToken
    }
});

export const setRefresh = refreshToken => ({
    type: SET_REFRESH,
    payload: {
        refreshToken
    }
});