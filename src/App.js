import React from 'react';
import Header from './components/Header/index.js';
import {renderRoutes } from 'react-router-config';
import { actions } from './components/Header/store';
const App = (props) => {
  return (
      <>
        <Header />
        {renderRoutes(props.route.routes)} 
      </>
    )
};
App.loadData = (store) => {
  return store.dispatch(actions.getHeaderInfo());
}
export default App; 