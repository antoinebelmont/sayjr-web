import { GET_TOKEN, CHECK_IS_LOGGED, IS_LOADING, SET_TOKEN,LOGOUT } from "../types";
import axios from "axios";

export function checkIsLogged(){
    const request = axios({
        url: "/api/is-logged",
        method:"GET"
    }).then(({ data }) => {
        return { ...data, status: 200 }
    }).catch(({ response }) => {
        return {
            ...response.data,
            status: response.status,
        }
    });
    return {
        type: CHECK_IS_LOGGED,
        payload: request
    }
}

export function isLoading(is_loading){

    return {
        type: IS_LOADING,
        payload:{is_loading}
    }
}

export function reloadToken(){
    return {
        type: SET_TOKEN,
        payload:null
    }
}


export function getToken(form) {
    const request = axios({
        url: "/api/user/login",
        method: "POST",
        data: { ...form }
    }).then(({ data }) => {
        return { ...data, status: 200 }
    }).catch(({ response }) => {
        return {
            ...response.data,
            status: response.status,
        }
    });

    return {
        type: GET_TOKEN,
        payload: request
    }
}

export function logout(){
    console.log('entra');
    const request = axios({
        url: '/api/user/logout',
        method: 'POST'
        
    }).then(({data})=> {
        return {status: 401}   
    }).catch(({ response}) => {
        return {
            status: response.status
        }
    });

    return {
        type: LOGOUT,
        payload:request
    }
}