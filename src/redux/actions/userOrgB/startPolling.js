import types from 'Root/redux/actions';
import store from 'Root/store';
import config from 'Root/config';
import fetch from 'Root/fetch';
import stopPolling from './stopPolling';

const polling = async () => {
  const { nonce, isPolling, afterDone } = store.getState().userOrgB;

  if (isPolling) {
    const res = await fetch({
      url: `${config.server}orgB/orgB1/registerQR/${nonce}`,
      options: {
        method: 'GET',
      },
    });

    if (Object.keys(res.data).length === 0 && isPolling) {
      setTimeout(polling, 1000);
    } else {
      afterDone(res.data);

      stopPolling();
      store.dispatch({
        type: types.userOrgB.STOP_RUNNING,
      });
    }
  } else {
    store.dispatch({
      type: types.userOrgB.STOP_RUNNING,
    });
  }
};

export default (afterDone) => {
  const { isPolling, isRunning } = store.getState().userOrgB;

  if (!isPolling && !isRunning) {
    store.dispatch({
      type: types.userOrgB.START_POLLING,
      afterDone,
    });

    store.dispatch({
      type: types.userOrgB.START_RUNNING,
    });

    polling();
  } else if (!isPolling && isRunning) {
    store.dispatch({
      type: types.userOrgB.START_POLLING,
      afterDone,
    });
  }
};
