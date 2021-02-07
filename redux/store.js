import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers';
import rootSaga from './sagas';

const saga = createSagaMiddleware();
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const makeStore = () => {
  const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(saga),
  ));

  saga.run(rootSaga);

  return store;
};

const wrapper = createWrapper(makeStore);

export default wrapper;
