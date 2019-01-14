import types from 'Root/redux/actions';
import store from 'Root/store';

export default async (values) => {
  store.dispatch({
    type: types.depositsOrgD.CLEAR,
  });
};
