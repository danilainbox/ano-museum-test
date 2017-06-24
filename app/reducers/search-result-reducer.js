import * as types from '../actions/action-types';

let initialState = {};

const searchResultReducer = function(state = initialState, action) {
    switch(action.type) {
        case types.SAVE_SEARCH_RESULT:
            return {
                items: action.items,
                isEmptyQuery: action.isEmptyQuery,
            }
    }
    return state;
};

export default searchResultReducer;

