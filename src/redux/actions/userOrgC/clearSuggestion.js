import types from 'Root/redux/actions';
import store from 'Root/store';

export default async (showNoot) => {
  store.dispatch({
    type: types.suggestionOrgA.CLEAR,
  });
};
