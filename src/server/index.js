import express from 'express';
import { render } from './utils';

const app = express();
app.use(express.static('public'))



app.get('*', (req, res) => {
  res.send(render(req));
})

console.log(3000, 'listening')
const server = app.listen(3000);