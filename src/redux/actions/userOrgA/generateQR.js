import types from 'Root/redux/actions';
import store from 'Root/store';
import config from 'Root/config';
import fetch from 'Root/fetch';
import { change } from 'redux-form';
import nonce from './nonce';
import startPolling from './startPolling';

export default async () => {
  const { values } = store.getState().form.loginOrgA;
  delete values.qrCode;

  const res = await fetch({
    url: `${config.server}orgA/newLoginQR`,
    query: values,
    options: {
      method: 'GET',
    },
  });

  store.dispatch(change('loginOrgA', 'qrCode', `${config.server}/${res.data.qrURL}`));
  nonce(res.data.nonce);

  startPolling();
};
