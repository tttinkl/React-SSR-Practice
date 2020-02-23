const express = require('express');
const cors = require('cors');
app = express();

app.use(cors());
app.get('/api/list', (req, res) => {
  const list = [
    {
      name: 'a',
      detail: 'haha'
    },{
      name: 'b',
      detail: 'wuwu'
    },{
      name: 'c',
      detail: 'hiahia'
    },{
      name: 'd',
      detail: 'xixi'
    },{
      name: 'd',
      detail: 'papa'
    }
  ];
  res.json(list);
});
// app.get('/api/isLogin');

// app.get('/api/login');
// app.get('/api/logout');
app.listen(3010, () => {console.log("listening 3010...")});