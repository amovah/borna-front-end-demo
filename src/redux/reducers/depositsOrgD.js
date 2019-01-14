import types from 'Root/redux/actions';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case types.depositsOrgD.LOAD: {
      return action.data;
    }

    case types.depositsOrgD.CLEAR: {
      return [];
    }

    default: {
      return state;
    }
  }
}
