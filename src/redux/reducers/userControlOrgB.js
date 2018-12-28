import types from 'Root/redux/actions';

/* eslint-disable */
const sampleData = [
  {
      "id": "qetuwryipadsgj10",
      "firstname": "علیرضا",
      "lastname": "عربی",
      "birthDate": "1545410200000",
      "status": "در دسترس",
      "mobileNumber": "۰۹۱۲۱۵۱۰۰۰۱",
      "imageURL": "google.com",
      "nationalId": "aabbccdd10"
  },
  {
      "id": "qetuwryipadsgj11",
      "firstname": "میلاد",
      "lastname": "محمدی",
      "birthDate": "1542410200000",
      "status": "در دسترس",
      "mobileNumber": "۰۹۱۲۱۵۱۰۰۰۲",
      "imageURL": "google.com",
      "nationalId": "aabbccdd11"
  },
  {
      "id": "qetuwryipadsgj12",
      "firstname": "سیما",
      "lastname": "خوش‌رو",
      "birthDate": "1445410200000",
      "status": "توقیف شده",
      "mobileNumber": "۰۹۱۲۱۵۱۰۰۰۳",
      "imageURL": "google.com",
      "nationalId": "aabbccdd12"
  },
  {
      "id": "qetuwryipadsgj13",
      "firstname": "کیانا",
      "lastname": "لشکری",
      "birthDate": "1245410200000",
      "status": "در دسترس",
      "mobileNumber": "۰۹۱۲۱۵۱۰۰۰۴",
      "imageURL": "google.com",
      "nationalId": "aabbccdd13"
  },
  {
      "id": "qetuwryipadsgj14",
      "firstname": "محمدحسین",
      "lastname": "تقوی",
      "birthDate": "1505410200000",
      "status": "در دسترس",
      "mobileNumber": "۰۹۱۲۱۵۱۰۰۰۵",
      "imageURL": "google.com",

      "nationalId": "aabbccdd14"
  },
  {
      "id": "qetuwryipadsgj15",
      "firstname": "حسین",
      "lastname": "سازگارنژاد",
      "birthDate": "1345410200000",
      "status": "در دسترس",
      "mobileNumber": "۰۹۱۲۱۵۱۰۰۰۶",
      "imageURL": "google.com",
      "nationalId": "aabbccdd15"
  },
  {
      "id": "qetuwryipadsgj16",
      "firstname": "پریسا",
      "lastname": "محمدی",
      "birthDate": "1540410200000",
      "status": "در دسترس",
      "mobileNumber": "۰۹۱۲۱۵۱۰۰۰۶",
      "imageURL": "google.com",
      "nationalId": "aabbccdd16"
  },
  {
      "id": "qetuwryipadsgj17",
      "firstname": "یاسمن",
      "lastname": "خسروی",
      "birthDate": "1045410200000",
      "status": "در دسترس",
      "mobileNumber": "۰۹۱۲۱۵۱۰۰۰۷",
      "imageURL": "google.com",
      "nationalId": "aabbccdd17"
  }
]

/* eslint-enable */

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case types.userControlOrgB.LOAD: {
      return sampleData;
    }

    default: {
      return state;
    }
  }
}
