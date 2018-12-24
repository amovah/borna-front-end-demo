import types from 'Root/redux/actions';

const initialState = {
  logged: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.userOrgC.LOGIN: {
      return {
        ...state,
        logged: true,
      };
    }

    default: {
      return state;
    }
  }
}
