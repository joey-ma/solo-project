// Action Creators
// Each Action Creator should return an action object
// (which will be passed to dispatch, which will invoke your reducers)

// if decided to use axios, install with 'npm install axios' first
import axios from 'axios';
import * as types from '../constants/actionTypes';

// declarative programming paradigm allows developers to easily see
// what is being calculated with very little parsing through control flow.

export const updateLocation = data => ({
  type: types.UPDATE_LOCATION,
  payload: data,
});

export const addCard = id => ({
  type: types.ADD_CARD,
  payload: id,
});

export const deleteCard = id => (dispatch, getState) => {
  if (getState().markets.marketList[id].cards > 0) {
    dispatch({ type: types.DELETE_CARD, payload: id });
  }
};

export const addMarket = event => (dispatch, getState) => {
  event.preventDefault();
  const location = getState().markets.newLocation;
  if (location) {
    dispatch({
      type: types.ADD_MARKET,
      payload: location,
    });
  }
};

// All processing of side effects (AJAX calls, setIntervals, etc)
// should be handled in Action Creators.Once all the data necessary to
// facilitate the state change is derived, the value should be passed
// as the payload in your action object

// in order to implement asynchronous functionality in Redux,
// you'll need to employ middleware like redux-thunk or redux-saga
// (axios is used in loadMarkets Action Creator)

export const syncMarkets = () => (dispatch, getState) => {
  axios.put('/markets', getState().markets.marketList)
    .then(({ status }) => {
      if (status === 200) dispatch({ type: types.SYNC_MARKETS });
    })
    .catch(console.error);
};

export const loadMarkets = () => (dispatch) => {
  axios.get('/markets')
    .then(({ data }) => {
      dispatch({
        type: types.LOAD_MARKETS,
        payload: data,
      });
    })
    .catch(console.error);
};
