import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import Edit from './components/Edit';
import Create from './components/Create';


ReactDOM.render(
  <Router>
      <div>
        <Route exact path={'/'} component={App} />
        <Route path={'/edit/:id'} component={Edit} />
        <Route path={'/create'} component={Create} />
        <Route path={'/api/book'} />
      </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
