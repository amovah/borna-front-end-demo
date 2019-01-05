import React from 'react';
import { render } from 'react-dom';
import App from './containers/App/App';
import store from 'Root/store';
import types from 'Root/redux/actions';

if (localStorage.orgB) {
  store.dispatch({
    type: types.userOrgB.LOGIN,
    ...JSON.parse(localStorage.orgB),
  });
}

if (localStorage.orgC) {
  store.dispatch({
    type: types.userOrgC.LOGIN,
    ...JSON.parse(localStorage.orgC),
  });
}

render(
  <App />,
  document.getElementById('root'),
);
