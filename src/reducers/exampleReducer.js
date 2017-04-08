import {IS_LOGGED, LOGIN_DATA, LOGIN_ERROR, AVAILABLE_DONORS} from '../actions/exampleAction';

export function isLoggedReducer(state = false, action){
    switch(action.type){
        case IS_LOGGED:
            return action.isLoggedIn;
        default:
            return state;
    }
}
export function loginDataReducer(state = "", action){
    switch(action.type){
        case LOGIN_DATA:
            return action.loginData;
        default:
            return state;
    }
} 
export function loginError(state = false, action){
    switch(action.type){
        case LOGIN_ERROR:
            return action.loginError;
        default:
            return state;
    }
} 

export function donorsReducer(state = [], action){
    switch(action.type){
        case AVAILABLE_DONORS:
            return action.bloodDonors;
        default:
            return state;
    }
} 
