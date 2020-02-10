import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import PageList from './src/page/PageList';
import PageDetail from './src/page/PageDetail';
import { BrowserRouter as Router, Route } from "react-router-dom";
import configureStore from './store/configure-store';

import './style/main.css'

const store = configureStore();

render(
  <Provider store={store}>
    // TODO aggiungi 2 route
    // 1- path="/" che punta a "PageList",
    // 2- path="/detail/:id" che punta a "PageDetail",
  </Provider>,
  document.getElementById('root')
);
