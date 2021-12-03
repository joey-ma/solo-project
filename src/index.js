// this "main" index.js (working with index.html) is used to render
// the App component, while Provider is imported from redux,
// it wraps around the App component and gets store passed in as a prop

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import GIContainer from './containers/GIContainer';
import MarketsContainer from './containers/MarketsContainer';
// saves a step from importing App & exporting it to index.js to render
// import App from './App';
import './styles.scss';

// functional component works
// (not sure how class component can be written as pure function)
const App = function () {
  return (
    <div>
      <span>
        <p>This portion is done with React.</p>
        <GIContainer />
        <MarketsContainer />
      </span>

    </div>
  );
};

// 1. import Provider from react-redux, the store from store.js, and your top level component
// 2. wrap your top level component in the Provider component
// 3. pass the store as a prop to the Provider component
ReactDOM.render(
  <Provider store={store}>
    <App />
    ,
  </Provider>,
  document.getElementById('root'),
);

// redux achieves predictive state within the paradigm of declarative
// programming through action objects, action creators, and reducer functions.
