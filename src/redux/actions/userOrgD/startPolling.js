/* eslint-disable */
import types from 'Root/redux/actions';
import store from 'Root/store';
import config from 'Root/config';
import fetch from 'Root/fetch';
import stopPolling from './stopPolling';

const polling = async () => {
  const { nonce, isPolling, afterDone } = store.getState().userOrgD;

  if (isPolling) {
//     afterDone({
//   "email": "73045074@isc.com",
//   "id": "73045074",
//   "firstname": "علی",
//   "lastname": "موحدی",
//   "nationalId": "0371781000",
//   "mobileNumber": "09303333333",
//   "birthDate": 580163400000,
//   "issuerId": "org2",
//   "issuerName": "بانک ملی ایران",
//   "issuerEmployee": "ادمین یک بانک ملی ایران",
//   "imageBase64": "",
//   "publicKeyBase64": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1NjNZtm+oTyx/XBawjE1pnHbyIBq2K9X\n23kHC0Oet38xt5zaTMTXMiAwYk7ZZCDa0ldu95ieEXNqSy+z4X8LG+M/wplgyKebHJ6LiEgAapfD\nqTi6vGpg3f6BgXpupqyzLOX3eQqTaEKHAe4eE+biEMX6GH2r3DNNR5axUyOyJjoAcrxkWKqBK+U0\nsduMoZcPbWvaydy2mqIgVlP4GzY+bPsNzd6nDi4v8IzulGlU/p3xZ2nw3QGA4fKUUugPUHuPlRUD\nQ6Ca+MU2kFakmoMfn7RYkvO+m2ealANik4+Rsy3qtIUtN/lwlGFOtVhhI+jP1gGUvmhh653JnfZz\nn4NRBQIDAQAB\n",
//   "signedNonce": "y1zFSTsdJejHAOKl/BvuG/uqC357I6KNRHVzmM9ATUVx6CgFoT6X2Q5gdz6CZ1RIsG7K3e57ESS3\nSMKuYcpNSoeU8qK+gwtXaXbANUNvY89/GWqKyZUtsQD9ksWGbiCdLGomC2VhfOPzKWESbnY4qtri\n6TisxzEDvXZxMC5Oa5gUXY3rBISIvPszNNLrs0CryaN41JyKnskWi0sqYwCsvh/hb2dbELyfRzUA\nBuZPp9GTYS2TKcaojYFNfDS22yL5X2+u+MqVwg7WnPyfezTgPMLq6JLVbzPndYn6ZWfpCuWrgiBH\nY6uKvQn6p4/m02Ds2b4z9ZSeP3IjRkUmlPkUfA==\n",
//   "status": "منتظر تائید",
//   "nonce": "3JdwxMWy2T"
// });
//
//     stopPolling();
//     store.dispatch({
//       type: types.userOrgB.STOP_RUNNING,
//     });
    const res = await fetch({
      url: `${config.server}orgB/org2/registerQR/${nonce}`,
      options: {
        method: 'GET',
      },
    });

    if (Object.keys(res.data).length === 0 && isPolling) {
      setTimeout(polling, 1000);
    } else {
      afterDone(res.data);

      stopPolling();
      store.dispatch({
        type: types.userOrgD.STOP_RUNNING,
      });
    }
  } else {
    store.dispatch({
      type: types.userOrgD.STOP_RUNNING,
    });
  }
};

export default (afterDone = () => {}) => {
  const { isPolling, isRunning } = store.getState().userOrgD;

  if (!isPolling && !isRunning) {
    store.dispatch({
      type: types.userOrgD.START_POLLING,
      afterDone,
    });

    store.dispatch({
      type: types.userOrgD.START_RUNNING,
    });

    polling();
  } else if (!isPolling && isRunning) {
    store.dispatch({
      type: types.userOrgD.START_POLLING,
      afterDone,
    });
  }
};
