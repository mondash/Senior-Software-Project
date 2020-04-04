import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

import * as ducks from './ducks';

const reducers = combineReducers(ducks);

const store =
  process.env.NODE_ENV === 'development'
    ? createStore(
        reducers,
        compose(
          applyMiddleware(reduxThunk),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      )
    : createStore(reducers, applyMiddleware(reduxThunk));

export default store;
