import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import {createLogger} from "redux-logger";


var Logger = createLogger();
const configureStore = (initialState) => createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, Logger)
);

export default configureStore;