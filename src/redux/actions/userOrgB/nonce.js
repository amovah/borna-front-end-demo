import types from 'Root/redux/actions';
import store from 'Root/store';

export default async (nonce) => {
  store.dispatch({
    type: types.userOrgB.NONCE,
    nonce,
  });
};
