import express from 'express';
import { render } from './utils';
import { getStore } from '../store';
import { matchRoutes } from 'react-router-config';
import routes from '../routes.js';
import proxy from 'express-http-proxy';
const app = express();
app.use('/api',proxy('http://localhost:3010', {
  proxyReqPathResolver: function (req) {
    return '/api' + req.url
  }
}))
app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = getStore();
  const matchedRoutes = matchRoutes(routes, req.path);
  const promises = [];
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  });
  Promise.all(promises).then(() => {
    res.send(render(store, routes, req));
  });
})

console.log(3000, 'listening')
const server = app.listen(3000);