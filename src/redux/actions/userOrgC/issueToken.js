import fetch from 'Root/fetch';
import showNoti from 'Root/redux/actions/noti/show';
import config from 'Root/config';
import store from 'Root/store';
import { enToFa, faToEn } from 'Root/mapper';

export default async (values) => {
  if (!values.toAddress || !values.amount) {
    return showNoti({
      color: 'warning',
      title: 'تمامی فیلد‌ها را پر کنید.',
    }, 'right-top');
  }

  const validValues = {
    ...values,
    amount: parseInt(faToEn(values.amount), 10),
    toAddress: values.toAddress.value,
  };

  const token = store.getState().userOrgC.token;
  const res = await fetch({
    url: `${config.server}orgC/tokenIssue`,
    options: {
      method: 'POST',
      body: JSON.stringify(validValues),
    },
    token,
  });

  if (!res.res.ok || res.data.status === 'ناموفق') {
    return showNoti({
      color: 'danger',
      title: 'عملیات ناموفق بود',
    }, 'right-top');
  }

  return showNoti({
    color: 'success',
    title: 'عملیات موفق‌آمیز بود',
  }, 'right-top');
};
