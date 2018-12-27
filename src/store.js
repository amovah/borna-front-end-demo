import { combineReducers, createStore } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import {
  sidebarReducer,
  themeReducer,
  userOrgA,
  suggestionOrgA,
  progressing,
  userOrgC,
  userOrgB,
  usersOrgC,
  tokensOrgC,
  transactionsOrgC,
} from 'Root/redux/reducers/index';

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form",
  theme: themeReducer,
  sidebar: sidebarReducer,
  userOrgA,
  suggestionOrgA,
  progressing,
  userOrgC,
  usersOrgC,
  tokensOrgC,
  transactionsOrgC,
  userOrgB,
});

const store = createStore(reducer);

if (process.env.NODE_ENV === 'development') {
  global.store = store;
}

export default store;
