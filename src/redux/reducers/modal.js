import types from 'Root/redux/actions';

const initialState = {
  isOpen: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.modal.OPEN: {
      return {
        ...action.modal,
        isOpen: true,
      };
    }

    case types.modal.CLOSE: {
      return {
        ...state,
        isOpen: false,
      };
    }

    default: {
      return state;
    }
  }
}
