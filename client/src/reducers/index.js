import * as actions from '../actions/actionTypes';

const reducers = (state = [], action) => {
    switch (action.type) {
        case actions.FETCH_DATA:
            return action.payload;
    
        default:
            return state;
    }
}

export default reducers;