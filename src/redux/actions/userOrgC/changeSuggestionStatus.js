import store from 'Root/store';
import types from 'Root/redux/actions';
import fetch from 'Root/fetch';
import config from 'Root/config';
import showNoti from 'Root/redux/actions/noti/show';
import loadSuggestion from './loadSuggestion';

export default (clientId, operation) => async () => {
  const res = await fetch({
    url: `${config.server}orgC/suggestionControl/${clientId}`,
    options: {
      method: 'PUT',
    },
    query: {
      operation,
    },
  });

  if (res.res.status !== 200) {
    return showNoti({
      color: 'danger',
      title: res.data.error.message,
    }, 'right-top');
  }

  loadSuggestion();

  return 0;
};
