import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { apiMiddleware } from 'redux-api-middleware'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
import sagas from '../sagas'

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [thunkMiddleware, sagaMiddleware, apiMiddleware];

  let composeEnhancers = compose;

  if (process.env.NODE_ENV === 'development') {
    if ('__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' in window) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }

    const loggerMiddleware = createLogger();
    middlewares.push(loggerMiddleware)
  }

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  sagas.forEach((saga) => {
    sagaMiddleware.run(saga);
  });

  return store
}
