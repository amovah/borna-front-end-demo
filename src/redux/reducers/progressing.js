import types from 'Root/redux/actions';

const initialState = false;

export default function (state = initialState, action) {
  switch (action.type) {
    case types.progressing.START: {
      return true;
    }

    case types.progressing.STOP: {
      return false;
    }

    default: {
      return state;
    }
  }
}
