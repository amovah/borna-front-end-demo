import types from 'Root/redux/actions';
import store from 'Root/store';

export default async (modal) => {
  store.dispatch({
    type: types.modal.OPEN,
    modal,
  });
};
