import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import { renderRoutes } from 'react-router-config';
import routes from '../Routes';
import { Provider } from 'react-redux';
import { getClientStore } from '../store';

const store = getClientStore();

const App = () => {
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
          {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
    </div>
    )
}
console.log('run')
const now = Date.now();
while(Date.now() - now < 3000){}
ReactDom.hydrate(<App />, document.getElementById("root"));