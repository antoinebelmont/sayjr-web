import {
    GET_INSURANCES,
    CHANGE_INSURANCE_STATUS,
    GET_ACCOUNTS,
    CHANGE_ACCOUNT_STATUS,
    INSURANCES_LIST
} from "../types";
import axios from "axios";

export function getInsurances() {
    const request = axios({
        url: "/api/insurances",
        method: "GET"
    })
        .then(({ data }) => {
            return { ...data, status: 200 };
        })
        .catch(({ response }) => {
            console.error(response);
        });

    return {
        type: GET_INSURANCES,
        payload: request
    };
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

export function createCoverage(dataMatrix){
    let url = "/api/account-coverages";
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

export function getCoverage(insuranceId){
    let url = `/api/account-coverages/${insuranceId}/edit`;
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

export function getAccounts() {
    const request = axios({
        url: "/api/account-coverages",
        method: "GET"
    })
        .then(({ data }) => {
            return { ...data, status: 200 };
        })
        .catch(({ response }) => {
            console.error(response.status);
        });

    return {
        type: GET_ACCOUNTS,
        payload: request
    };
}

export function changeAccountStatus(data) {
    const request = axios({
        url: `/api/account-coverages/${data.id}`,
        method: "PUT",
        data: { ...data }
    })
        .then(({ data }) => {
            return { ...data, status: 200 };
        })
        .catch(({ response }) => {
            console.error(response);
        });

    return {
        type: CHANGE_ACCOUNT_STATUS,
        payload: null
    };
}

export function changeInsuranceStatus(data) {
    const request = axios({
        url: `/api/insurances/${data.id}`,
        method: "PUT",
        data: { ...data }
    })
        .then(({ data }) => {
            return { ...data, status: 200 };
        })
        .catch(({ response }) => {
            console.error(response);
        });

    return {
        type: CHANGE_INSURANCE_STATUS,
        payload: null
    };
}
