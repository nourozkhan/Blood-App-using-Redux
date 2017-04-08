import React from 'react';
import { Login, AppBarExampleIcon, Main, DonateForm, Thanks } from './components';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={AppBarExampleIcon} >
          <IndexRoute component={Login} />
          <Route path="/main" component={Main} />
          <Route path="/thanks" component={Thanks}/>
          <Route path="/donateform" component={DonateForm}/>
        </Route>

      </Router>
)