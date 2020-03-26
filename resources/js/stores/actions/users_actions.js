import {
    USERS_LIST
} from '../types';

import axios from "axios";

export function getUsers(){
    const request = axios({
        url: "/api/users",
        method: 'GET'
    })
        .then(({data})=>{
            console.log('ola k ase')
            return {...data,status: 200};
        })
        .catch(({response}) => {
            console.error(response);
        })
    return {
        type: USERS_LIST,
        payload: request
    }
}

export function createUser(dataMatrix){
    let url = "/api/users";
    let method = 'POST';
    if(dataMatrix.id != '' && dataMatrix.id != null){
        url = `${url}/${dataMatrix.id}`; 
        method = 'PUT';
    }
    console.log(dataMatrix,method,url);
    const request = axios({
        url:url,
        method:method,
        data:dataMatrix
    })
        .then(({data})=>{
            console.log('ola k ase')
            return {...data,status: 200};
        })
        .catch(({response}) => {
            console.error(response);
        })
    return {
        type: USERS_LIST,
        payload: request
    }
}

export function getUser(userId){
    let url = `/api/users/${userId}/edit`;
    let method = 'GET';
    const request = axios({
        url:url,
        method:method
    })
        .then(({data})=>{
            return {...data,status: 200};
        })
        .catch(({response}) => {
            console.error(response);
        })
    return {
        type: USERS_LIST,
        payload: request
    }
}