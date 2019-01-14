import types from 'Root/redux/actions';
import store from 'Root/store';
import config from 'Root/config';
import fetch from 'Root/fetch';
import { change } from 'redux-form';
import nonce from './nonce';

export default async (cb = () => {}) => {
  const res = await fetch({
    url: `${config.server}orgB/org2/newRegisterQR`,
    options: {
      method: 'GET',
    },
  });

  store.dispatch(change('SingupUserFormB', 'QRCode', `${config.server}/${res.data.qrURL}`));
  nonce(res.data.nonce);

  cb();
};
