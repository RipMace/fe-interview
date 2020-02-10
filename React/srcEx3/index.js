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
    <Router>
        <Route path="/" exact component={PageList} />
        <Route path="/detail/:id" component={PageDetail} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
