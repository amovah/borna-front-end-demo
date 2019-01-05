import types from 'Root/redux/actions';
import store from 'Root/store';
import config from 'Root/config';
import fetch from 'Root/fetch';
import showNoti from 'Root/redux/actions/noti/show';
import moment from 'Root/moment';
import { faToEn } from 'Root/mapper';

const showWar = (text) => {
  showNoti({
    color: 'warning',
    title: text,
  }, 'right-top');
};

export default async (values) => {
  const validValues = {
  };

  if (values.startAmount || values.endAmount) {
    validValues.amount = {};
  }

  if (values.startDate || values.endDate) {
    validValues.date = {};
  }

  if (values.startAmount) {
    validValues.amount.gt = parseInt(faToEn(values.startAmount), 10);
  }

  if (values.endAmount) {
    validValues.amount.lt = parseInt(faToEn(values.endAmount), 10);
  }

  if (values.startDate) {
    const m = moment(faToEn(values.startDate), 'jYYYY/jMM/jDD');
    if (!m.isValid()) {
      return showWar('حداقل تاریخ معتبر نیست');
    }
    validValues.date.gt = m.valueOf();
  }

  if (values.endDate) {
    const m = moment(faToEn(values.endDate), 'jYYYY/jMM/jDD');
    if (!m.isValid()) {
      return showWar('حداکثر تاریخ معتبر نیست.');
    }
    validValues.date.lt = m.valueOf();
  }

  if (values.status) {
    validValues.status = values.status.value;
  }

  if (values.destination) {
    validValues.destination = values.destination.value;
  }

  if (values.source) {
    validValues.source = values.source.value;
  }

  const res = await fetch({
    url: `${config.server}orgC/transactionList`,
    options: {
      method: 'GET',
      filter: {
        where: validValues,
      },
    },
  });

  if (!res.res.ok) {
    return showNoti({
      color: 'danger',
      title: 'عملیات ناموفق بود',
    }, 'right-top');
  }

  store.dispatch({
    type: types.transactionsOrgC.LOAD,
    data: res.data,
  });

  return null;
};
