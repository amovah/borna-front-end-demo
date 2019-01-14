import store from 'Root/store';
import types from 'Root/redux/actions';
import fetch from 'Root/fetch';
import config from 'Root/config';
import showNoti from 'Root/redux/actions/noti/show';
import loadClient from './loadClient';

export default (clientId, operation) => async () => {
  const res = await fetch({
    url: `${config.server}orgB/org2/clientControl/${clientId}`,
    options: {
      method: 'PUT',
    },
    query: {
      operation,
    },
  });

  if (!res.res.ok) {
    return showNoti({
      color: 'danger',
      title: res.data.error.message,
    }, 'right-top');
  }

  loadClient();

  return 0;
};
