import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch } from 'react-router-dom';
import App from './App'

// 导入 mock 数据
import './Mock/Mock'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <App />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
