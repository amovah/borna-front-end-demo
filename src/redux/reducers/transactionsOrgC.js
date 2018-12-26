import types from 'Root/redux/actions';

/* eslint-disable */
const sampleData = [
    {
        "id": "1a1sda4gfskvln34",
        "amount": 25,
        "date": 1545460200000,
        "status": "موفقیت‌آمیز",
        "source": {
            "id": "qetuwryipadsgj20",
            "firstname": "متین",
            "lastname": "کابلی",
            "nationalId": "aabbccdd20"
        },
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
        "source": {
            "id": "qetuwryipadsgj21",
            "firstname": "علی",
            "lastname": "موجدی",
            "nationalId": "aabbccdd21"
        },
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
        "source": {
            "id": "qetuwryipadsgj22",
            "firstname": "حسین",
            "lastname": "نمازیان",
            "nationalId": "aabbccdd22"
        },
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
        "source": {
            "id": "qetuwryipadsgj23",
            "firstname": "هادی",
            "lastname": "پورحسینی",
            "nationalId": "aabbccdd23"
        },
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
        "source": {
            "id": "qetuwryipadsgj24",
            "firstname": "حسام",
            "lastname": "آشنا",
            "nationalId": "aabbccdd24"
        },
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
        "source": {
            "id": "qetuwryipadsgj25",
            "firstname": "سینا",
            "lastname": "استواری",
            "nationalId": "aabbccdd25"
        },
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
        "source": {
            "id": "qetuwryipadsgj26",
            "firstname": "فرزانه",
            "lastname": "ساتوشی",
            "nationalId": "aabbccdd26"
        },
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
        "source": {
            "id": "qetuwryipadsgj27",
            "firstname": "نیما",
            "lastname": "خاشقجی",
            "nationalId": "aabbccdd27"
        },
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
        "source": {
            "id": "qetuwryipadsgj28",
            "firstname": "شهرزاد",
            "lastname": "قصه‌گو",
            "nationalId": "aabbccdd28"
        },
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
    case types.transactionsOrgC.LOAD: {
      return sampleData;
    }

    default: {
      return state;
    }
  }
}
