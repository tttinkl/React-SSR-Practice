import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../containers/Home/store/'

const reducer = combineReducers({
  home: homeReducer
})
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);


export const getStore = () => {
  return createStore(reducer, enhancer);
}

export const getClientStore = () => {
  const defaultState = window.context.state;
  return createStore(reducer, defaultState, enhancer);
}

