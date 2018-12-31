import types from 'Root/redux/actions';

const initialState = {
  logged: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.userOrgB.LOGIN: {
      return {
        ...state,
        logged: true,
        token: action.token,
        userId: action.userId,
      };
    }

    case types.userOrgB.LOGOUT: {
      return {
        ...state,
        logged: false,
      };
    }

    case types.userOrgB.NONCE: {
      return {
        ...state,
        nonce: action.nonce,
      };
    }

    case types.userOrgB.START_POLLING: {
      return {
        ...state,
        isPolling: true,
        afterDone: action.afterDone,
      };
    }

    case types.userOrgB.STOP_POLLING: {
      return {
        ...state,
        isPolling: false,
      };
    }

    case types.userOrgB.START_RUNNING: {
      return {
        ...state,
        isRunning: true,
      };
    }

    case types.userOrgB.STOP_RUNNING: {
      return {
        ...state,
        isRunning: false,
      };
    }

    default: {
      return state;
    }
  }
}
