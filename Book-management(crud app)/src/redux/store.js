import { legacy_createStore,compose, applyMiddleware, combineReducers } from "redux";
import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";

import thunk from "redux-thunk"

const rootReducer = combineReducers({AppReducer,AuthReducer})

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose



export const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
