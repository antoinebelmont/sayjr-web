import {
    SERVICE_CATALOGS,
    UPDATE_ACCOUNT_COVERAGES,
    CREATE_SERVICE,
    SERVICE_LIST,
    GET_SERVICE,
    GET_SERVICE_DETAIL
} from "../types";

const serviceState = {
    catalogs: [],
    services: []
};

export default (state = serviceState, action) => {
    let _state = state;
    switch (action.type) {
        case SERVICE_CATALOGS: {
            _state.catalogs = action.payload.catalogs;
            return _state;
        }
        case SERVICE_LIST: {
            _state.catalogs = action.payload.services;
            return _state;
        }
        case UPDATE_ACCOUNT_COVERAGES: {
            _state.services = action.payload.accountCoverages;
            return _state;
        }
        case CREATE_SERVICE: {
            _state.catalogs = action.payload.serviceId;
            return _state;
        }
        case GET_SERVICE: {
            _state.service = action.payload;
            return _state;
        }
        case GET_SERVICE_DETAIL: {
            _state.service = action.payload;
            return _state;
        }
        default:
            return state;
    }
};
