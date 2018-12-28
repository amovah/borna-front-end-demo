import types from 'Root/redux/actions';

/* eslint-disable */
const sampleData = [
  {
    "depositId": "xxyyzzdd10",
    "createDate": "1545460200000",
    "updateDate": "1545461200000",
    "profitPercentage": "۲۵٪",
    "interval": "یک دقیقه‌ای",
    "deposit": "۲۴۰",
    "profit": "۱۲۰",
    "owner": {
      "id": "qetuwryipadsgj12",
      "firstname": "علیرضا",
      "lastname": "عربی",
      "nationalId": "aabbccdd12"
    }
  },
  {
    "depositId": "xxyyzzdd11",
    "createDate": "1545462200000",
    "updateDate": "1545463200000",
    "profitPercentage": "۱۵٪",
    "interval": "دو دقیقه‌ای",
    "deposit": "۱۵۰",
    "profit": "۲۰",
    "owner": {
      "id": "qetuwryipadsgj13",
      "firstname": "مینا",
      "lastname": "موحدی",
      "nationalId": "aabbccdd13"
    }
  },
  {
    "depositId": "xxyyzzdd12",
    "createDate": "1545463200000",
    "updateDate": "1545464200000",
    "profitPercentage": "۳۵٪",
    "interval": "پنج دقیقه‌ای",
    "deposit": "۵۰۰",
    "profit": "۱۳۰",
    "owner": {
      "id": "qetuwryipadsgj14",
      "firstname": "متین",
      "lastname": "کابلی",
      "nationalId": "aabbccdd14"
    }
  },
  {
    "depositId": "xxyyzzdd13",
    "createDate": "1545465200000",
    "updateDate": "1545466200000",
    "profitPercentage": "۳۵٪",
    "interval": "دو دقیقه‌ای",
    "deposit": "۱۳۰۰",
    "profit": "۳۰۰",
    "owner": {
      "id": "qetuwryipadsgj15",
      "firstname": "مجتبی",
      "lastname": "پاک‌گهر",
      "nationalId": "aabbccdd15"
    }
  },
  {
    "depositId": "xxyyzzdd14",
    "createDate": "1545465200000",
    "updateDate": "1545467200000",
    "profitPercentage": "۱۲٪",
    "interval": "سه دقیقه‌ای",
    "deposit": "۱۲۰۰",
    "profit": "۳۰۰",
    "owner": {
      "id": "qetuwryipadsgj16",
      "firstname": "هما",
      "lastname": "محمدی‌فر",
      "nationalId": "aabbccdd16"
    }
  },
  {
    "depositId": "xxyyzzdd15",
    "createDate": "1545466200000",
    "updateDate": "1545469300000",
    "profitPercentage": "۳۳٫",
    "interval": "یک دقیقه‌ای",
    "deposit": "۱۲۸۹",
    "profit": "۱۳۳",
    "owner": {
      "id": "qetuwryipadsgj17",
      "firstname": "هما",
      "lastname": "محمدی‌فر",
      "nationalId": "aabbccdd17"
    }
  }
]

/* eslint-enable */

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case types.depositsOrgB.LOAD: {
      return sampleData;
    }

    default: {
      return state;
    }
  }
}
