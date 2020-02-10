import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

// TODO riesci a spiegarmi a parole che cosa serve e cosa fa questo file?
export default function configureStore(initialState = {}) {
  const middlewares = [thunkMiddleware, apiMiddleware];

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

  return store
}
