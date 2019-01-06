import types from 'Root/redux/actions';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case types.transactionsOrgC.LOAD: {
      return action.data;
    }

    case types.transactionsOrgC.CLEAR: {
      return [];
    }

    default: {
      return state;
    }
  }
}
