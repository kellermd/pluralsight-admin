import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses: courses // or just 'courses' if using ES6 short hand property, since both left and right sides are same
});

export default rootReducer;
