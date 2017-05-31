import { combineReducers } from 'redux';
import exhibitsReducer from './exhibits-reducer';

var reducers = combineReducers({
    exhibitsState: exhibitsReducer
});

export default reducers;