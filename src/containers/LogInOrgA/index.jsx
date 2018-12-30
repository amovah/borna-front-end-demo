import React from 'react';
import LogInForm from './components/LogInForm';
import loginAction from 'Root/redux/actions/userOrgA/login';
import RefreshIcon from 'mdi-react/RefreshIcon';
import generateQR from 'Root/redux/actions/userOrgA/generateQR';

const onSubmit = () => {
  generateQR();
};

const LogIn = () => (
  <div className="account">
    <LogInForm onSubmit={onSubmit} />
    <div className="thatRefreshBut">
      <RefreshIcon className="genrefreshbut" />
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
