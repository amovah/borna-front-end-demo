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
import LayoutOrgC from '../LayoutOrgC/index';
import ProtectedOrgC from 'Root/shared/components/ProtectedOrgC';
import GenerateTokenOrgC from '../GenerateTokenOrgC';
import ReportGenTok from '../ReportGenTok';
import ReportTransOrgC from '../ReportTransOrgC';
// orgA
import LoginOrgD from '../LogInOrgD';

const PagesOrgA = () => (
  <Switch>
    <Route path="/orgA/suggestion" component={SuggestionOrgA} />
  </Switch>
);

const PagesOrgC = () => (
  <Switch>
    <Route path="/orgC/generate-token" component={GenerateTokenOrgC} />
    <Route path="/orgC/report-token-generation" component={ReportGenTok} />
    <Route path="/orgC/report-transactions" component={ReportTransOrgC} />
  </Switch>
);

const orgA = () => (
  <ProtectedOrgA>
    <div>
      <LayoutOrgA />
      <div className="container__wrap">
        <Route path="/orgA" component={PagesOrgA} />
      </div>
    </div>
  </ProtectedOrgA>
);

const orgC = () => (
  <ProtectedOrgC>
    <div>
      <LayoutOrgC />
      <div className="container__wrap">
        <Route path="/orgC" component={PagesOrgC} />
      </div>
    </div>
  </ProtectedOrgC>
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
        <Route path="/orgC" component={orgC} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
