import types from 'Root/redux/actions';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case types.depositsOrgB.LOAD: {
      return action.data;
    }

    case types.depositsOrgB.CLEAR: {
      return [];
    }

    default: {
      return state;
    }
  }
}
