import {combineReducers} from 'redux';
import {isLoggedReducer, loginDataReducer, loginError, donorsReducer} from './exampleReducer';

const rootReducer = combineReducers({
    isLogged: isLoggedReducer,
    loginData: loginDataReducer,
    loginError: loginError,
    donors: donorsReducer
});
export default rootReducer;