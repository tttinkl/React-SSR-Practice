const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
app = express();
app.use(cookieParser());
app.use(cors());
app.use((req, res, next) => {
  // console.log('mid node',req);
  next();
});
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
app.get('/api/isLogin', (req, res) => {
  console.log('req cookie', req.cookies);
  if (req.cookies.token === "123") {
    res.json( { data: { login: true } })
  } else {
    res.json({ data: { login: false } })
  } 
});

app.get('/api/login', (req, res) => {
  res.cookie('token', 123);
  res.json({data: {login: true}});
});
app.get('/api/logout', (req, res) => {
  res.json({data: {login: false}})
});
app.listen(3010, () => {console.log("listening 3010...")});