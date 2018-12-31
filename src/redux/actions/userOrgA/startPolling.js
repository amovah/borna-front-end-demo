import types from 'Root/redux/actions';
import store from 'Root/store';
import config from 'Root/config';
import fetch from 'Root/fetch';

const polling = async () => {
  const { nonce, isPolling } = store.getState().userOrgA;

  if (isPolling) {
    const res = await fetch({
      url: `${config.server}orgA/loginQR/${nonce}`,
      options: {
        method: 'POST',
      },
    });

    if (Object.keys(res.data).length === 0 && isPolling) {
      setTimeout(polling, 1000);
    } else {
      res.data.a();
    }
  }
};

export default () => {
  const { isPolling } = store.getState().userOrgA;

  if (!isPolling) {
    store.dispatch({
      type: types.userOrgA.START_POLLING,
    });

    polling();
  }
};
