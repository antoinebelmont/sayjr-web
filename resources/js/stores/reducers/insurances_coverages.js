import { GET_INSURANCES } from "../types";

const insuranceCoverageState = {
    insurances: []
}
export default (state = insuranceCoverageState, action) => {
    let _state = state;
    switch (action.type) {
        
        case GET_INSURANCES:{            
            _state.insurances = action.payload.insurances;
            return _state;
        } 
            
        default:
            return state;
    }
};