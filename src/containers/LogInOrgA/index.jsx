import React from 'react';
import LogInForm from './components/LogInForm';
import loginAction from 'Root/redux/actions/userOrgA/login';
import RefreshIcon from 'mdi-react/RefreshIcon';
import generateQR from 'Root/redux/actions/userOrgA/generateQR';
import store from 'Root/store';
import { reset, submit, change } from 'redux-form';

const onSubmit = () => {
  generateQR();
};

const resetForm = () => {
  store.dispatch(reset('loginOrgA'));
  store.dispatch(change('loginOrgA', 'firstname', true));
  store.dispatch(change('loginOrgA', 'lastname', true));

  generateQR();
};

const LogIn = () => (
  <div className="account">
    <LogInForm onSubmit={onSubmit} />
    <div className="thatRefreshBut">
      <RefreshIcon className="genrefreshbut" onClick={resetForm} />
    </div>
    <div className="version-indicator-in-login-page">
      <p>
        ورژن ۰.۹.۰
      </p>
    </div>

    <div className="heythere-indicator-in-login-page">
      <p>
        پروژه آریاتک
      </p>
    </div>
  </div>
);

export default LogIn;

// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles
