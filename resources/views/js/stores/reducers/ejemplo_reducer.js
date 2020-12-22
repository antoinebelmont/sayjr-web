import { SET_EJEMPLO } from "../types"

const initialState = {
    numero:1
}

export default function(state = initialState, action) {
    let _state = {...state}

    switch(action.type) {

        case SET_EJEMPLO:{
            _state.numero = action.payload.tonio
            return _state;
        }
        
        default: 
            return _state
    }
    
}