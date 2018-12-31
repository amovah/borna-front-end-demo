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

    default: {
      return state;
    }
  }
}
