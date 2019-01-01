import types from 'Root/redux/actions';
import store from 'Root/store';
import config from 'Root/config';
import fetch from 'Root/fetch';
import showNoti from 'Root/redux/actions/noti/show';

export default async (values) => {
  const res = await fetch({
    url: `${config.server}orgC/tokenIssueList`,
    options: {
      method: 'GET',
      filter: {
        firstname: 'صراظگ صحکسیتفخرک',
      },
    },
  });

  // store.dispatch({
  //   type: types.tokensOrgC.LOAD,
  //   data: res.data,
  // });

  showNoti({
    color: 'success',
    title: 'با موفقیت اطلاعات بارگزاری شد.',
  }, 'right-top');
};