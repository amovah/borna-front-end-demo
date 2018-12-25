import types from 'Root/redux/actions';
import store from 'Root/store';
import history from 'Root/history';

export default async () => {
  store.dispatch({
    type: types.userOrgC.LOGIN,
  });

  store.dispatch({
    type: types.usersOrgC.LOAD,
  });

  history.push('/orgC/generate-token');
};
