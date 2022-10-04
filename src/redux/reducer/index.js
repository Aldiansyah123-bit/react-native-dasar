import {combineReducers} from 'redux';
import userReducer from './userReducer';

const AllReducer = combineReducers({
  user: userReducer,
});

export default AllReducer;
