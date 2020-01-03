import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import ThemeOptions from '../../reducers/ThemeOptions';
import Layout from '../../reducers/Layout';
import Auth from '../../reducers/Auth';
import Login from './auth_reducer';
import Example from './ejemplo_reducer';
import InsurancesCoverages from './insurances_coverages';
import Service from './services_reducer';
import Users from './users_reducer';
const rootReducer = combineReducers({
    Users,
    Service,
    InsurancesCoverages,
    Example,
    Login,
    Auth,
    ThemeOptions,
    Layout,
    form: formReducer,
    default:( state, action) =>({...state})
})

export default rootReducer;