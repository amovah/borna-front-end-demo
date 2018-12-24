import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainWrapper from './MainWrapper';
// orgA
import LoginOrgA from '../LogInOrgA';
import LayoutOrgA from '../LayoutOrgA/index';
import SuggestionOrgA from '../SuggestionOrgA';
import ProtectedOrgA from 'Root/shared/components/ProtectedOrgA';
// orgA
import LoginOrgB from '../LogInOrgB';
// orgA
import LoginOrgC from '../LogInOrgC';
// orgA
import LoginOrgD from '../LogInOrgD';

const Pages = () => (
  <Switch>
    <Route path="/orgA/suggestion" component={SuggestionOrgA} />
  </Switch>
);

const orgA = () => (
  <ProtectedOrgA>
    <div>
      <LayoutOrgA />
      <div className="container__wrap">
        <Route path="/orgA" component={Pages} />
      </div>
    </div>
  </ProtectedOrgA>
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
