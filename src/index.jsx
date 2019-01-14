import React from 'react';
import { render } from 'react-dom';
import App from './containers/App/App';
import store from 'Root/store';
import types from 'Root/redux/actions';
import loadClient from 'Root/redux/actions/userOrgB/loadClient';
import loadDeposits from 'Root/redux/actions/userOrgB/loadDeposits';
import loadTokens from 'Root/redux/actions/userOrgC/loadTokens';
import loadTrans from 'Root/redux/actions/userOrgC/loadTrans';
import loadClientA from 'Root/redux/actions/userOrgC/loadClient';
import loadSuggestion from 'Root/redux/actions/userOrgC/loadSuggestion';
import loadClientD from 'Root/redux/actions/userOrgD/loadClient';
import loadDepositsD from 'Root/redux/actions/userOrgD/loadDeposits';

if (localStorage.orgB) {
  store.dispatch({
    type: types.userOrgB.LOGIN,
    ...JSON.parse(localStorage.orgB),
  });

  loadDeposits();
  loadClient();
}

if (localStorage.orgC) {
  store.dispatch({
    type: types.userOrgC.LOGIN,
    ...JSON.parse(localStorage.orgC),
  });

  loadClientA();
  loadTokens();
  loadTrans();
  loadSuggestion();
}

if (localStorage.orgD) {
  store.dispatch({
    type: types.userOrgD.LOGIN,
    ...JSON.parse(localStorage.orgD),
  });

  loadDepositsD();
  loadClientD();
}

render(
  <App />,
  document.getElementById('root'),
);
