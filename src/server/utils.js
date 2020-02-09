import  routes from '../routes.js';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { renderToString } from "react-dom/server";
import getStore from '../store';
import { Provider } from 'react-redux';


export const render = (req) => {
  const content = renderToString((
    <Provider store={getStore()}>
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
        <script src="/index.js"></script>
      </html>
    `
    )
}