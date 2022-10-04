import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import AllReducer from './reducer';

const initialstate = {};
const middleware = [thunk];
const Store = createStore(
  AllReducer,
  initialstate,
  applyMiddleware(...middleware),
);

export default Store;
