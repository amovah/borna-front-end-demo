import types from 'Root/redux/actions';
import store from 'Root/store';
import history from 'Root/history';
import fetch from 'Root/fetch';
import config from 'Root/config';
import showNoti from 'Root/redux/actions/noti/show';

export default async (values) => {
  const res = await fetch({
    url: `${config.server}orgC/login`,
    options: {
      method: 'POST',
      body: JSON.stringify(values),
    },
  });

  if (res.res.status !== 200) {
    return showNoti({
      color: 'warning',
      title: 'نام کاربری یا رمز عبور اشتباه است.',
    }, 'right-top');
  }

  store.dispatch({
    type: types.userOrgC.LOGIN,
    token: res.data.id,
    userId: res.data.userId,
  });


  store.dispatch({
    type: types.usersOrgC.LOAD,
  });

  store.dispatch({
    type: types.tokensOrgC.LOAD,
  });

  store.dispatch({
    type: types.transactionsOrgC.LOAD,
  });

  store.dispatch({
    type: types.suggestionOrgA.LOAD,
  });

  history.push('/orgC/generate-token');

  return 0;
};
