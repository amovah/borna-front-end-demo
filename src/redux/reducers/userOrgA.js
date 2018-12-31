import types from 'Root/redux/actions';

const initialState = {
  logged: false,
  nonce: null,
  isPolling: false,
  isRunning: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.userOrgA.LOGIN: {
      return {
        ...state,
        logged: true,
      };
    }

    case types.userOrgA.NONCE: {
      return {
        ...state,
        nonce: action.nonce,
      };
    }

    case types.userOrgA.START_POLLING: {
      return {
        ...state,
        isPolling: true,
        afterDone: action.afterDone,
      };
    }

    case types.userOrgA.STOP_POLLING: {
      return {
        ...state,
        isPolling: false,
      };
    }

    default: {
      return state;
    }
  }
}
