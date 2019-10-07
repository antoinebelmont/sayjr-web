import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import ThemeOptions from '../../reducers/ThemeOptions';
import Layout from '../../reducers/Layout';
import Auth from '../../reducers/Auth';
const rootReducer = combineReducers({
    Auth,
    ThemeOptions,
    Layout,
    form: formReducer,
    default:( state, action) =>({...state})
})

export default rootReducer;