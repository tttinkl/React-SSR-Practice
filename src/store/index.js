import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import clientAxios from '../client/request';
import { reducer as headerReducer } from '../components/Header/store/index.js';
import { reducer as homeReducer } from '../containers/Home/store/';
import serverAxios from '../server/request';


const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer
})
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const serverEnhancer = (req) =>  composeEnhancers(
  applyMiddleware(thunk.withExtraArgument(serverAxios(req)))
  // other store enhancers if any
);

const clientEnhancer = composeEnhancers(
  applyMiddleware(thunk.withExtraArgument(clientAxios))
  // other store enhancers if any
);
export const getStore = (req) => {
  return createStore(reducer, serverEnhancer(req));
}

export const getClientStore = () => {
  const defaultState = window.context.state;
  return createStore(reducer, defaultState, clientEnhancer);
}

