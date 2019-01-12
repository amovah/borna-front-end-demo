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

  if (values.firstname) {
    validValues.firstname = values.firstname;
  }

  if (values.lastname) {
    validValues.lastname = values.lastname;
  }

  if (values.nationalId) {
    validValues.nationalId = values.nationalId;
  }

  if (values.mobileNumber) {
    validValues.mobileNumber = values.mobileNumber;
  }

  const res = await fetch({
    url: `${config.server}orgB/org1/clientList`,
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
    type: types.userControlOrgB.LOAD,
    data: res.data,
  });

  return null;
};
