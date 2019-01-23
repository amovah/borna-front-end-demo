import types from 'Root/redux/actions';
import store from 'Root/store';
import config from 'Root/config';
import fetch from 'Root/fetch';
import { change } from 'redux-form';
import nonce from './nonce';

export default async (cb = () => {}) => {
  const token = store.getState().userOrgB.token;
  const res = await fetch({
    url: `${config.server}orgB/org1/newRegisterQR`,
    options: {
      method: 'GET',
    },
    token,
  });

  store.dispatch(change('SingupUserForm', 'QRCode', `${config.server}/${res.data.qrURL}`));
  nonce(res.data.nonce);

  cb();
};
