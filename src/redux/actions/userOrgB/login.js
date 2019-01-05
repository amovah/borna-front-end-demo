import types from 'Root/redux/actions';
import store from 'Root/store';
import history from 'Root/history';
import fetch from 'Root/fetch';
import config from 'Root/config';
import showNoti from 'Root/redux/actions/noti/show';
import loadClient from './loadClient';
import loadDeposits from './loadDeposits';

export default async (values) => {
  if (!values.email && !values.password) {
    return showNoti({
      color: 'warning',
      title: 'تمامی فیلد‌ها را پر کنید.',
    }, 'right-top');
  }

  const res = await fetch({
    url: `${config.server}orgB/orgB1/login`,
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
    type: types.userOrgB.LOGIN,
    token: res.data.id,
    userId: res.data.userId,
  });

  loadDeposits();
  loadClient();

  history.push('/orgB/user-control');

  return 0;
};
