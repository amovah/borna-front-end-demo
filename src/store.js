import { combineReducers, createStore } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import {
  sidebarReducer,
  themeReducer,
  userReducer,
  orgASuggestion,
} from 'Root/redux/reducers/index';

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form",
  theme: themeReducer,
  sidebar: sidebarReducer,
  user: userReducer,
  orgASuggestion,
});

const store = createStore(reducer);

if (process.env.NODE_ENV === 'development') {
  global.store = store;
}

export default store;
