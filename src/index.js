import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Edit from './components/Edit';
import Create from './components/Create';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path={process.env.PUBLIC_URL +'/'} component={App} />
        <Route path={process.env.PUBLIC_URL+'/edit/:id'} component={Edit} />
        <Route path={process.env.PUBLIC_URL+'/create'} component={Create} />
      </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
