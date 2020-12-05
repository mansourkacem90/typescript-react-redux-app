import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import appReducer from './reducers';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
import { watchAgeUp } from './sagas';

const store = createStore(appReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchAgeUp);

import LazyLandingComponent from './components/pages/landing-component';
import './index.scss';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" render={() => <LazyLandingComponent />} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('output'),
);
