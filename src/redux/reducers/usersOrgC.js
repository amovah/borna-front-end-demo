import types from 'Root/redux/actions';

/* eslint-disable */
const sampleData = [
    {
        "id": "qetuwryipadsgj10",
        "firstname": "علیرضا",
        "lastname": "عربی",
        "nationalId": "aabbccdd10"
    },
    {
        "id": "qetuwryipadsgj11",
        "firstname": "میلاد",
        "lastname": "محمدی",
        "nationalId": "aabbccdd11"
    },
    {
        "id": "qetuwryipadsgj12",
        "firstname": "سیما",
        "lastname": "خوش‌رو",
        "nationalId": "aabbccdd12"
    },
    {
        "id": "qetuwryipadsgj13",
        "firstname": "کیانا",
        "lastname": "لشکری",
        "nationalId": "aabbccdd13"
    },
    {
        "id": "qetuwryipadsgj14",
        "firstname": "محمدحسین",
        "lastname": "تقوی",
        "nationalId": "aabbccdd14"
    },
    {
        "id": "qetuwryipadsgj15",
        "firstname": "حسین",
        "lastname": "سازگارنژاد",
        "nationalId": "aabbccdd15"
    },
    {
        "id": "qetuwryipadsgj16",
        "firstname": "پریسا",
        "lastname": "محمدی",
        "nationalId": "aabbccdd16"
    },
    {
        "id": "qetuwryipadsgj17",
        "firstname": "یاسمن",
        "lastname": "خسروی",
        "nationalId": "aabbccdd17"
    }
]

/* eslint-enable */

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case types.usersOrgC.LOAD: {
      return sampleData;
    }

    default: {
      return state;
    }
  }
}
