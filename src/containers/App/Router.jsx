import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainWrapper from './MainWrapper';
// orgA
import LoginOrgA from '../LogInOrgA';
import OrgALayout from '../OrgALayout/index';
// orgA
import LoginOrgB from '../LogInOrgB';
import Protected from 'Root/shared/components/Protected';
// orgA
import LoginOrgC from '../LogInOrgC';
// orgA
import LoginOrgD from '../LogInOrgD';
import ExamplePageOne from '../Example/index';
import ExamplePageTwo from '../ExampleTwo/index';

const Pages = () => (
  <Switch>
    <Route path="/pages/one" component={ExamplePageOne} />
    <Route path="/pages/two" component={ExamplePageTwo} />
  </Switch>
);

const orgA = () => (
  <Protected>
    <div>
      <OrgALayout />
      <div className="container__wrap">
        <Route path="/orgA" component={Pages} />
      </div>
    </div>
  </Protected>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/login/orgA" component={LoginOrgA} />
        <Route exact path="/login/orgB" component={LoginOrgB} />
        <Route exact path="/login/orgC" component={LoginOrgC} />
        <Route exact path="/login/orgD" component={LoginOrgD} />
        <Route path="/orgA" component={orgA} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
