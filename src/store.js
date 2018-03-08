import {createStore, combineReducers, applyMiddleware} from 'redux';

import data from './reducers/dataReducer';


// store: reducer and начальное состояние store
export default createStore(
  data,
  { }
);