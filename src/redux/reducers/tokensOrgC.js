import types from 'Root/redux/actions';

/* eslint-disable */
const sampleData = [
    {
        "id": "1a1sda4gfskvln34",
        "amount": 25,
        "date": 1545460200000,
        "status": "موفقیت‌آمیز",
        "destination": {
            "id": "qetuwryipadsgj12",
            "firstname": "علیرضا",
            "lastname": "عربی",
            "nationalId": "aabbccdd12"
        }
    },
    {
        "id": "1a1sda4gfskvln35",
        "amount": 35,
        "date": 1545461200000,
        "status": "موفقیت‌آمیز",
        "destination": {
            "id": "qetuwryipadsgj13",
            "firstname": "کیانا",
            "lastname": "لشکری",
            "nationalId": "aabbccdd13"
        }
    },
    {
        "id": "1a1sda4gfskvln36",
        "amount": 35,
        "date": 1545458200000,
        "status": "موفقیت‌آمیز",
        "destination": {
            "id": "qetuwryipadsgj14",
            "firstname": "مینا",
            "lastname": "محمدی",
            "nationalId": "aabbccdd14"
        }
    },
    {
        "id": "1a1sda4gfskvln37",
        "amount": 65,
        "date": 1545459200000,
        "status": "ناموفق",
        "destination": {
            "id": "qetuwryipadsgj15",
            "firstname": "محمد",
            "lastname": "معتظمی",
            "nationalId": "aabbccdd15"
        }
    },
    {
        "id": "1a1sda4gfskvln38",
        "amount": 13,
        "date": 1545454700000,
        "status": "موفقیت‌آمیز",
        "destination": {
            "id": "qetuwryipadsgj15",
            "firstname": "محمود",
            "lastname": "احمدی‌نژاد",
            "nationalId": "aabbccdd15"
        }
    },
    {
        "id": "1a1sda4gfskvln39",
        "amount": 22,
        "date": 1545460000000,
        "status": "موفقیت‌آمیز",
        "destination": {
            "id": "qetuwryipadsgj16",
            "firstname": "محمود",
            "lastname": "قلی‌پور",
            "nationalId": "aabbccdd16"
        }
    },
    {
        "id": "1a1sda4gfskvln40",
        "amount": 40,
        "date": 1545461100000,
        "status": "ناموفق",
        "destination": {
            "id": "qetuwryipadsgj17",
            "firstname": "علی",
            "lastname": "کریمی",
            "nationalId": "aabbccdd17"
        }
    },
    {
        "id": "1a1sda4gfskvln41",
        "amount": 40,
        "date": 1545461200000,
        "status": "ناموفق",
        "destination": {
            "id": "qetuwryipadsgj18",
            "firstname": "فرشاد",
            "lastname": "احمدزاده",
            "nationalId": "aabbccdd18"
        }
    },
    {
        "id": "1a1sda4gfskvln42",
        "amount": 40,
        "date": 1545461200000,
        "status": "ناموفق",
        "destination": {
            "id": "qetuwryipadsgj19",
            "firstname": "سینا",
            "lastname": "حجازی",
            "nationalId": "aabbccdd19"
        }
    }
]
/* eslint-enable */

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case types.tokensOrgC.LOAD: {
      return sampleData;
    }

    default: {
      return state;
    }
  }
}
