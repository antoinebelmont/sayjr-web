import {
    USERS_LIST
} from '../types';

const usersState = {
    users: []
}

export default (state = usersState, action) => {
    let _state = state;
    switch (action.type){
        case USERS_LIST:{
            _state.users = action.payload.users;
            return _state;
        }
        default:
            return state;
    }
}