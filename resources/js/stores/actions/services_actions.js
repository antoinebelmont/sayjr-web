import {
    SERVICE_CATALOGS,
    CREATE_SERVICE,
    UPDATE_ACCOUNT_COVERAGES,
    SERVICE_LIST,
    GET_SERVICE,
    GET_SERVICE_DETAIL,CREATE_COMMENT,
    GET_SERVICE_COMMENTS,
    CREATE_PAYMENT,
    GET_SERVICE_PAYMENTS,
    GET_TRACKING,
    CREATE_INVOICE,
    GET_REPORT
} from "../types";

import axios from "axios";

export function getTracking(){
    const request = axios({
        url: '/api/services/tracking',
        method:'GET'
    }).then(({data})=>{
        return {...data,status:200}
    }).catch(({response}) => {
        console.error(response)
    })

    return {
        type: GET_TRACKING,
        payload: request
    }
}

export function getReport(fields,details){
    const request = axios({
        url: '/api/services/report',
        method:'POST',
        data:{fields,details}
    }).then(({data})=>{
        return {...data,status:200}
    }).catch(({response}) => {
        console.error(response)
    })

    return {
        type: GET_REPORT,
        payload: request
    }
}

export function getCatalogs() {
    const request = axios({
        url: "/api/services/catalogs",
        method: "GET"
    })
        .then(({ data }) => {
            return { ...data, status: 200 };
        })
        .catch(({ response }) => {
            console.error(response);
        });

    return {
        type: SERVICE_CATALOGS,
        payload: request
    };
}

export function changeAccountCoverages(insuranceId) {
    const request = axios({
        url: "/api/services/account-coverages",
        method: "POST",
        data: { insurance_id: insuranceId }
    })
        .then(({ data }) => {
            return { ...data, status: 200 };
        })
        .catch(({ response }) => {
            console.error(response);
        });

    return {
        type: UPDATE_ACCOUNT_COVERAGES,
        payload: request
    };
}

export function createService(dataMatrix) {
    let url = "/api/services";
    let method = 'POST';
    if(dataMatrix.id != ''){
        url = `${url}/${dataMatrix.id}`; 
        method = 'PUT';
    }

    const request = axios({
        url,
        method,
        data: { ...dataMatrix }
    })
        .then(({ data }) => {
            return { ...data, status: 200 };
        })
        .catch(({ response }) => {
            console.error(response);
        });

    return {
        type: CREATE_SERVICE,
        payload: request
    };
}

export function getServices() {
    const request = axios({
        url: "/api/services",
        method: "GET"
    })
        .then(({ data }) => {
            return { ...data, status: 200 };
        })
        .catch(({ response }) => {
            console.error(response);
        });

    return {
        type: SERVICE_LIST,
        payload: request
    };
}

export function getService(serviceId) {
    const request = axios({
        url: `/api/services/${serviceId}/edit`,
        method: "GET"
    })
        .then(({ data }) => {
            return { ...data, status: 200 };
        })
        .catch(({ response }) => {
            console.error(response);
        });

    return {
        type: GET_SERVICE,
        payload: request
    };
}

export function getServiceDetail(serviceId) {
    const request = axios({
        url: `/api/services/${serviceId}`,
        method: "GET"
    })
        .then(({ data }) => {
            return { ...data, status: 200 };
        })
        .catch(({ response }) => {
            console.error(response);
        });

    return {
        type: GET_SERVICE_DETAIL,
        payload: request
    };
}

export function getServiceComments(serviceId) {
    const request = axios({
        url: `/api/services/comments/${serviceId}`,
        method: "GET"
    })
        .then(({ data }) => {
            return { ...data, status: 200 };
        })
        .catch(({ response }) => {
            console.error(response);
        });

    return {
        type: GET_SERVICE_COMMENTS,
        payload: request
    };
}

export function getServiceExtraPayments(serviceId) {
    const request = axios({
        url: `/api/services/payments/${serviceId}`,
        method: "GET"
    })
        .then(({ data }) => {
            return { ...data, status: 200 };
        })
        .catch(({ response }) => {
            console.error(response);
        });

    return {
        type: GET_SERVICE_PAYMENTS,
        payload: request
    };
}

export function createComment(comment,service_id) {
    let url = "/api/services/comment";
    let method = 'POST';
    const request = axios({
        url,
        method,
        data: {comment,service_id}
    })
        .then(({ data }) => {
            return { ...data, status: 200 };
        })
        .catch(({ response }) => {
            console.error(response);
        });

    return {
        type: CREATE_COMMENT,
        payload: request
    };
}

export function createPayment(data) {
    let url = "/api/services/payment";
    let method = 'POST';
    const request = axios({
        url,
        method,
        data
    })
        .then(({ data }) => {
            return { ...data, status: 200 };
        })
        .catch(({ response }) => {
            console.error(response);
        });

    return {
        type: CREATE_PAYMENT,
        payload: request
    };
}

export function createInvoice(data) {
    let url = "/api/services/invoice";
    let method = 'POST';
    const request = axios({
        url,
        method,
        data
    })
        .then(({ data }) => {
            return { ...data, status: 200 };
        })
        .catch(({ response }) => {
            console.error(response);
        });

    return {
        type: CREATE_INVOICE,
        payload: request
    };
}