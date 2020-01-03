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