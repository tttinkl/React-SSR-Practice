import React from 'react';
import Header from './components/Header/index.js';
import {renderRoutes } from 'react-router-config';

const App = (props) => {
  return (
      <>
        <Header />
        {renderRoutes(props.route.routes)} 
      </>
    )
};

export default App; 