import types from 'Root/redux/actions';
import store from 'Root/store';
import history from 'Root/history';

export default () => {
  store.dispatch({
    type: types.user.LOGIN,
  });

  history.push('/orgA');
};
