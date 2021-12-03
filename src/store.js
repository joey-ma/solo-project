import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';

// import the state tree returned by combineReducers
// and pass it into createStore to create your store
// we can also add in Redux devtools here
const store = createStore(reducers, composeWithDevTools());
// rootReducer

export default store;
