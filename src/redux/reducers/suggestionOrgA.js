import types from 'Root/redux/actions';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case types.suggestionOrgA.LOAD: {
      return action.data;
    }

    case types.suggestionOrgA.CLEAR: {
      return [];
    }

    default: {
      return state;
    }
  }
}
