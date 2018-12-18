import types from 'Root/redux/actions';
import store from 'Root/store';

export default () => {
  store.dispatch({
    type: types.user.LOGIN,
  });
};
