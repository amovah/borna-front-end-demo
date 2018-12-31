import types from 'Root/redux/actions';
import store from 'Root/store';
import history from 'Root/history';
import fetch from 'Root/fetch';
import config from 'Root/config';
import showNoti from 'Root/redux/actions/noti/show';

export default async (values) => {
  const res = await fetch({
    url: `${config.server}orgB/orgB1/login`,
    options: {
      method: 'POST',
      body: JSON.stringify(values),
    },
  });
  showNoti({
    color: 'warning',
    title: 'نام کاربری یا رمز عبور اشتباه است.',
  }, 'right-top');
  console.log(showNoti);
  // store.dispatch({
  //   type: types.userOrgB.LOGIN,
  // });
  //
  // store.dispatch({
  //   type: types.depositsOrgB.LOAD,
  // });
  //
  // store.dispatch({
  //   type: types.userControlOrgB.LOAD,
  // });

  // store.dispatch({
  //   type: types.transactionsOrgC.LOAD,
  // });

  // history.push('/orgB/user-control');
};
