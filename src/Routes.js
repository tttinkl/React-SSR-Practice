import { Route } from 'react-router-dom';
import React from 'react';
import Home from './containers/Home';
import Login from './containers/Login';
import App from './App.js'
export default [
  {
    path: '/',
    component: App,
    routes: [
    {
      path: '/',
      component: Home,
      exact: true,
      loadData: Home.loadData,
      key: 'home'
    },{
      path: '/login',
      component: Login,
      exact: true,
      key: 'login'
    }]
  }
]