import { combineReducers } from 'redux';
import marketsReducer from './marketsReducer';

// use combine reducers to create one root reducer (functional composition)
// it takes one argument -> an object that holds all of your reducers
export default combineReducers({ markets: marketsReducer });
// resultant state tree

// combine your reducers into a single state tree
// (using combineReducers from the Redux library)
