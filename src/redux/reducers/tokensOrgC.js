import types from 'Root/redux/actions';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case types.tokensOrgC.LOAD: {
      return action.data;
    }

    case types.tokensOrgC.CLEAR: {
      return [];
    }

    default: {
      return state;
    }
  }
}
