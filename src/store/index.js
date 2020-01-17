import {createStore, combineReducers, applyMiddleware} from 'redux'
// import {createLogger} from 'redux-logger'
import thunkMiddelware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import * as reducers from './reducers';


// const loggerMiddleware = createLogger();
const composeEnhancers = composeWithDevTools;

function preloadedState(state = {}) {
    return {
            
            phones: [],
            ui: {
                isFetching: false,
                err: null
            },
            detailAd: null,
            
    
    }
}
    


export function configureStore() {
    const reducer = combineReducers(reducers);
    // const middlewares = [thunkMiddelware, loggerMiddleware]
    const middlewares = [thunkMiddelware]
    const store = createStore(
            reducer,
            preloadedState(),
            composeEnhancers(applyMiddleware(...middlewares)))
    return store;
}