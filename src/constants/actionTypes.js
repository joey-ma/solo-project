// create and export constants that represent an allow-list of all of
// the ways we want to change state. These will be the values passed as
// the type properties in your action objects AND used as cases in the
// switch statements of reducers (marketsReducer in this case).

export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const ADD_MARKET = 'ADD_MARKET';
export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const SYNC_MARKETS = 'SYNC_MARKETS';
export const LOAD_MARKETS = 'LOAD_MARKETS';
