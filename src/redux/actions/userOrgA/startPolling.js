import types from 'Root/redux/actions';
import store from 'Root/store';
import config from 'Root/config';
import fetch from 'Root/fetch';
import stopPolling from './stopPolling';

const polling = async () => {
  const { nonce, isPolling, afterDone } = store.getState().userOrgA;

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
      afterDone(res.data);

      stopPolling();
      store.dispatch({
        type: types.userOrgA.STOP_RUNNING,
      });
    }
  } else {
    store.dispatch({
      type: types.userOrgA.STOP_RUNNING,
    });
  }

  //   afterDone({
  //     firstname: 'a',
  //     status: 'نا معتبر',
  //   });
  //
  //   stopPolling();
  //   store.dispatch({
  //     type: types.userOrgA.STOP_RUNNING,
  //   });
  // }
};

export default (afterDone = () => {}) => {
  const { isPolling, isRunning } = store.getState().userOrgA;

  if (!isPolling && !isRunning) {
    store.dispatch({
      type: types.userOrgA.START_POLLING,
      afterDone,
    });

    store.dispatch({
      type: types.userOrgA.START_RUNNING,
    });

    polling();
  } else if (!isPolling && isRunning) {
    store.dispatch({
      type: types.userOrgA.START_POLLING,
      afterDone,
    });
  }
};
