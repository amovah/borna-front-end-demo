import types from 'Root/redux/actions';
import store from 'Root/store';
import config from 'Root/config';
import fetch from 'Root/fetch';
import showNoti from 'Root/redux/actions/noti/show';

export default async (showNoot) => {
  const token = store.getState().userOrgC.token;
  const res = await fetch({
    url: `${config.server}orgB/org1/depositList`,
    options: {
      method: 'GET',
    },
    token,
  });

  store.dispatch({
    type: types.depositsOrgB.LOAD,
    data: res.data,
  });
};
