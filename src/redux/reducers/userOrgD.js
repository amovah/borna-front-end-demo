import types from 'Root/redux/actions';

const initialState = {
  logged: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.userOrgD.LOGIN: {
      return {
        ...state,
        logged: true,
        token: action.token,
        userId: action.userId,
      };
    }

    case types.userOrgD.LOGOUT: {
      return {
        ...state,
        logged: false,
      };
    }

    case types.userOrgD.NONCE: {
      return {
        ...state,
        nonce: action.nonce,
      };
    }

    case types.userOrgD.START_POLLING: {
      return {
        ...state,
        isPolling: true,
        afterDone: action.afterDone,
      };
    }

    case types.userOrgD.STOP_POLLING: {
      return {
        ...state,
        isPolling: false,
      };
    }

    case types.userOrgD.START_RUNNING: {
      return {
        ...state,
        isRunning: true,
      };
    }

    case types.userOrgD.STOP_RUNNING: {
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
