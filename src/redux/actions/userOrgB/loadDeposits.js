import types from 'Root/redux/actions';
import store from 'Root/store';
import config from 'Root/config';
import fetch from 'Root/fetch';
import showNoti from 'Root/redux/actions/noti/show';

export default async (showNoot) => {
  const res = await fetch({
    url: `${config.server}orgB/orgB1/depositList`,
    options: {
      method: 'GET',
    },
  });

  store.dispatch({
    type: types.depositsOrgB.LOAD,
    data: res.data,
  });

  if (showNoot) {
    showNoti({
      color: 'success',
      title: 'با موفقیت اطلاعات بارگزاری شد.',
    }, 'right-top');
  }
};
