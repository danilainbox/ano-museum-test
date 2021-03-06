import * as types from '../actions/action-types';

const initialState = [];

const exhibitsReducer = function (state = initialState, action) {
    switch(action.type) {
        case types.GET_EXHIBITS_SUCCESS:
            return Object.assign([], state, action.exhibits);
        case types.ADD_EXHIBIT:
            let newState = state.concat(action.exhibit);
            return newState;
    }
    return state;
};

export default exhibitsReducer;