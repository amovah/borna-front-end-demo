import types from 'Root/redux/actions';
import store from 'Root/store';
import config from 'Root/config';
import fetch from 'Root/fetch';
import { change } from 'redux-form';
import nonce from './nonce';
import showNoti from 'Root/redux/actions/noti/show';

export default async () => {
  const { values } = store.getState().form.loginOrgA;
  delete values.qrCode;

  const shit = Object.assign({}, values);
  delete shit.orgname;

  let all = true;
  for (const value of Object.values(shit)) {
    if (value) {
      all = false;
      break;
    }
  }

  if (all) {
    return showNoti({
      color: 'warning',
      title: 'یکی از فیلد‌ها را باید تیک بزنید.',
    }, 'right-top');
  }

  const res = await fetch({
    url: `${config.server}orgA/newLoginQR`,
    query: values,
    options: {
      method: 'GET',
    },
  });

  store.dispatch(change('loginOrgA', 'qrCode', `${config.server}/${res.data.qrURL}`));
  nonce(res.data.nonce);

  return null;
};
