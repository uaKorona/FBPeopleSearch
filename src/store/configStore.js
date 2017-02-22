import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import redirect from '../middleware/redirect';

export default function configStore(initialState) {
  const logger = createLogger();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunk,
      logger,
      redirect,
    ),
  );

  return store;
}
