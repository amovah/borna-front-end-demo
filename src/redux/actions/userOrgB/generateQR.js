import types from 'Root/redux/actions';
import store from 'Root/store';
import config from 'Root/config';
import fetch from 'Root/fetch';
import { change } from 'redux-form';
import nonce from './nonce';

export default async () => {
  const res = await fetch({
    url: `${config.server}orgB/orgB1/newRegisterQR`,
    options: {
      method: 'GET',
    },
  });

  store.dispatch(change('loginOrgA', 'qrCode', `${config.server}/${res.data.qrURL}`));
  nonce(res.data.nonce);
};
