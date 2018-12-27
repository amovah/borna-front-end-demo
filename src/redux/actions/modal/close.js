import types from 'Root/redux/actions';
import store from 'Root/store';

export default async () => {
  store.dispatch({
    type: types.modal.CLOSE,
  });
};
