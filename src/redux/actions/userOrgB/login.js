import types from 'Root/redux/actions';
import store from 'Root/store';
import history from 'Root/history';

export default async () => {
  store.dispatch({
    type: types.userOrgB.LOGIN,
  });

  store.dispatch({
    type: types.depositsOrgB.LOAD,
  });

  store.dispatch({
    type: types.userControlOrgB.LOAD,
  });

  // store.dispatch({
  //   type: types.transactionsOrgC.LOAD,
  // });

  history.push('/orgB/user-control');
};
