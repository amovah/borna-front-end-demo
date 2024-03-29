import types from 'Root/redux/actions';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case types.userControlOrgB.LOAD: {
      return action.data;
    }

    case types.userControlOrgB.CLEAR: {
      return [];
    }

    default: {
      return state;
    }
  }
}
