import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import Routes from './shared/components/Routes';

import './shared/base.css';


const ROOT_ELEMENT = 'app';

ReactDOM.render((
  <Router history={browserHistory}>
    {Routes}
  </Router>
), document.getElementById(ROOT_ELEMENT));
