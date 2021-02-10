import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './component/app.js';

//Include bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Include popper
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//Include styles
import "./css/style.css"


ReactDOM.render(
    <App />,
  document.getElementById('root')
);
