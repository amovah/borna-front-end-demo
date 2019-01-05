import types from 'Root/redux/actions';
import store from 'Root/store';
import history from 'Root/history';
import fetch from 'Root/fetch';
import config from 'Root/config';
import showNoti from 'Root/redux/actions/noti/show';
import loadTokens from './loadTokens';
import loadTrans from './loadTrans';
import loadClient from './loadClient';
import loadSuggestion from './loadSuggestion';

export default async (values) => {
  if (!values.email || !values.password) {
    return showNoti({
      color: 'warning',
      title: 'تمامی فیلد‌ها را پر کنید.',
    }, 'right-top');
  }

  const res = await fetch({
    url: `${config.server}orgC/login`,
    options: {
      method: 'POST',
      body: JSON.stringify(values),
    },
  });

  if (res.res.status !== 200) {
    return showNoti({
      color: 'danger',
      title: 'نام کاربری یا رمز عبور اشتباه است.',
    }, 'right-top');
  }

  store.dispatch({
    type: types.userOrgC.LOGIN,
    token: res.data.id,
    userId: res.data.userId,
  });

  loadClient();
  loadTokens();
  loadTrans();
  loadSuggestion();

  history.push('/orgC/generate-token');

  return 0;
};
