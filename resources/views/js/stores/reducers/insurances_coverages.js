import { GET_INSURANCES,CHANGE_INSURANCE_STATUS,GET_ACCOUNTS,CHANGE_ACCOUNT_STATUS } from "../types";

const insuranceCoverageState = {
    insurances: [],
    accounts: []
}
export default (state = insuranceCoverageState, action) => {
    let _state = state;
    switch (action.type) {
        
        case GET_INSURANCES:{            
            _state.insurances = action.payload.insurances;
            return _state;
        } 

        case CHANGE_INSURANCE_STATUS:{

            return _state;
        }
        case GET_ACCOUNTS:{            
            _state.accounts = action.payload.accounts;
            return _state;
        } 

        case CHANGE_ACCOUNT_STATUS:{

            return _state;
        }
            
        default:
            return state;
    }
};