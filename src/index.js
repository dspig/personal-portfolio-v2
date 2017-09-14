import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import reducers from './reducers'
import './index.css';

import PlaceholderView from './components/Placeholder/Placeholder'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

// Examples of using react router

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch> 
        <Route path="/" component={PlaceholderView} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
