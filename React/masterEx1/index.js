import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import PageList from './src/page/PageList';
import configureStore from './store/configure-store';

import './style/main.css'

const store = configureStore();

render(
  <Provider store={store}>
    <PageList />
  </Provider>,
  document.getElementById('root')
);
