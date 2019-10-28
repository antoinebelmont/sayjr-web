import {
    GET_INSURANCES,
    CHANGE_INSURANCE_STATUS,
    GET_ACCOUNTS,
    CHANGE_ACCOUNT_STATUS
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
