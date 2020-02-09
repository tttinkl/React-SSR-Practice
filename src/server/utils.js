import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { renderToString } from "react-dom/server";

import { Provider } from 'react-redux';


export const render = (store, routes, req) => {
    const content = renderToString((
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          <div>
            {renderRoutes(routes)}
          </div>
        </StaticRouter>
      </Provider>
    )); 
    return (
      `
      <html>
        <body>
          <div id="root">${content}</div>
        </body>
        <script>window.context = {
          state: ${JSON.stringify(store.getState())}
        }</script>
        <script src="/index.js"></script>
      </html>
    `
    ) 
}