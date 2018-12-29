import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainWrapper from './MainWrapper';
// orgA
import LoginOrgA from '../LogInOrgA';
import LayoutOrgA from '../LayoutOrgA/index';
import SuggestionOrgA from '../SuggestionOrgA';
import ProtectedOrgA from 'Root/shared/components/ProtectedOrgA';
// orgB
import LoginOrgB from '../LogInOrgB';
import LayoutOrgB from '../LayoutOrgB/index';
import ProtectedOrgB from 'Root/shared/components/ProtectedOrgB';
import UserControlOrgB from '../UserControlOrgB';
import SignupUserOrgB from '../SignupUserOrgB';
import DepositOrgB from '../DepositOrgB';
// orgC
import LoginOrgC from '../LogInOrgC';
import LayoutOrgC from '../LayoutOrgC/index';
import ProtectedOrgC from 'Root/shared/components/ProtectedOrgC';
import GenerateTokenOrgC from '../GenerateTokenOrgC';
import ReportGenTok from '../ReportGenTok';
import ReportTransOrgC from '../ReportTransOrgC';
// orgD
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
    <Route path="/orgC/suggestion" component={SuggestionOrgA} />
  </Switch>
);

const PagesOrgB = () => (
  <Switch>
    <Route path="/orgB/user-control" component={UserControlOrgB} />
    <Route path="/orgB/signup-user" component={SignupUserOrgB} />
    <Route path="/orgB/deposit" component={DepositOrgB} />
  </Switch>
);


const OrgA = () => (
  <ProtectedOrgA>
    <div>
      <LayoutOrgA />
      <div className="container__wrap">
        <Route path="/orgA" component={PagesOrgA} />
      </div>
    </div>
  </ProtectedOrgA>
);

const OrgC = () => (
  <ProtectedOrgC>
    <div>
      <LayoutOrgC />
      <div className="container__wrap">
        <Route path="/orgC" component={PagesOrgC} />
      </div>
    </div>
  </ProtectedOrgC>
);

const OrgB = () => (
  <ProtectedOrgB>
    <div>
      <LayoutOrgB />
      <div className="container__wrap">
        <Route path="/orgB" component={PagesOrgB} />
      </div>
    </div>
  </ProtectedOrgB>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/login/orgA" component={LoginOrgA} />
        <Route exact path="/login/orgB" component={LoginOrgB} />
        <Route exact path="/login/orgC" component={LoginOrgC} />
        <Route exact path="/login/orgD" component={LoginOrgD} />
        <Route path="/orgA" component={OrgA} />
        <Route path="/orgC" component={OrgC} />
        <Route path="/orgB" component={OrgB} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
