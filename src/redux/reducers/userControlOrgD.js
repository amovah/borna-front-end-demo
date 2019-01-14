import types from 'Root/redux/actions';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case types.userControlOrgD.LOAD: {
      return action.data;
    }

    case types.userControlOrgD.CLEAR: {
      return [];
    }

    default: {
      return state;
    }
  }
}
