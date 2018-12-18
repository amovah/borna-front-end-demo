import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';

import LoginOrgA from '../LogInOrgA';
import LoginOrgB from '../LogInOrgB';
import LoginOrgC from '../LogInOrgC';
import LoginOrgD from '../LogInOrgD';
import ExamplePageOne from '../Example/index';
import ExamplePageTwo from '../ExampleTwo/index';

const Pages = () => (
  <Switch>
    <Route path="/pages/one" component={ExamplePageOne} />
    <Route path="/pages/two" component={ExamplePageTwo} />
  </Switch>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/pages" component={Pages} />
    </div>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/login/orgA" component={LoginOrgA} />
        <Route exact path="/login/orgB" component={LoginOrgB} />
        <Route exact path="/login/orgC" component={LoginOrgC} />
        <Route exact path="/login/orgD" component={LoginOrgD} />
        <Route path="/" component={wrappedRoutes} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
