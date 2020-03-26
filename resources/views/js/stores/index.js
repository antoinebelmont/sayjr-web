import promiseMiddleware from "redux-promise";
import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from "stores/reducers"
const composeEnhancer = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(promiseMiddleware))
);

export default store;