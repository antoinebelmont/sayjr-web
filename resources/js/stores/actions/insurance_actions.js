import {
    INSURANCES_LIST
} from '../types';

import axios from "axios";

export function getInsurances(){
    const request = axios({
        url: "/api/insurances",
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
        type: INSURANCES_LIST,
        payload: request
    }
}

export function createInsurance(dataMatrix){
    let url = "/api/insurances";
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
        type: INSURANCES_LIST,
        payload: request
    }
}

export function getInsurance(insuranceId){
    let url = `/api/insurances/${insuranceId}/edit`;
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
        type: INSURANCES_LIST,
        payload: request
    }
}