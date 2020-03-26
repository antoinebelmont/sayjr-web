import { GET_TOKEN, CHECK_IS_LOGGED, IS_LOADING, SET_TOKEN } from "../types"
import axios from "axios";

const authState = {
    token: null,

    isLogged: false,
    isLoadingSplash: true,
}

export default function (state = authState, action) {
    let _state = { ...state }

    switch (action.type) {

        case GET_TOKEN: {
            axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
            axios.defaults.headers.common["Authorization"] = `Bearer ${action.payload.data.auth_token}`;
            localStorage.setItem("auth_token", action.payload.data.auth_token);
            _state.isLogged = action.payload.success;
            return _state;
        }

        case SET_TOKEN: {
            let auth_token = localStorage.getItem("auth_token");
            axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
            axios.defaults.headers.common["Authorization"] = `Bearer ${auth_token}`;
            _state.isLogged = true;
            return _state;
        }

        case CHECK_IS_LOGGED: {
            _state.isLogged = action.payload.is_logged;
            if(!_state.isLogged) {
                localStorage.setItem("auth_token", null);
                delete axios.defaults.headers.common["Authorization"];
            }

            return _state;
        }

        case IS_LOADING: {
            _state.isLoadingSplash = action.payload.is_loading;
            return _state;
        }

        default:
            return _state
    }

}