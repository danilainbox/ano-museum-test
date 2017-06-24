import { combineReducers } from 'redux';
import exhibitsReducer from './exhibits-reducer';
import searchResultReducer from './search-result-reducer';

var reducers = combineReducers({
    exhibitsState: exhibitsReducer,
    searchResultState: searchResultReducer
});

export default reducers;