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

  if (values.startDate || values.endDate) {
    validValues.date = {};
  }

  if (values.startDeposit || values.endDeposit) {
    validValues.deposit = {};
  }

  if (values.startProfit || values.endProfit) {
    validValues.profit = {};
  }

  if (values.startProfitPercent || values.endProfitPercent) {
    validValues.profitPercent = {};
  }

  if (values.startDeposit) {
    validValues.deposit.gt = parseInt(faToEn(values.startDeposit), 10);
  }

  if (values.endDeposit) {
    validValues.deposit.lt = parseInt(faToEn(values.endDeposit), 10);
  }

  if (values.startProfit) {
    validValues.profit.gt = parseInt(faToEn(values.startProfit), 10);
  }

  if (values.endProfit) {
    validValues.profit.lt = parseInt(faToEn(values.endProfit), 10);
  }

  if (values.startProfitPercent) {
    validValues.profitPercent.gt = parseInt(faToEn(values.startProfitPercent), 10);
  }

  if (values.endProfitPercent) {
    validValues.profitPercent.lt = parseInt(faToEn(values.endProfitPercent), 10);
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

  const token = store.getState().userOrgC.token;
  const res = await fetch({
    url: `${config.server}orgB/org1/depositList`,
    options: {
      method: 'GET',
      filter: {
        where: validValues,
      },
    },
    token,
  });

  if (!res.res.ok) {
    return showNoti({
      color: 'danger',
      title: 'عملیات ناموفق بود',
    }, 'right-top');
  }

  store.dispatch({
    type: types.depositsOrgB.LOAD,
    data: res.data,
  });

  return null;
};
