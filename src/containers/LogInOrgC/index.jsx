import React from 'react';
import LogInForm from './components/LogInForm';

const LogIn = () => (
  <div className="account">
    <div className="account__wrapper">
      <div className="account__card">
        <LogInForm onSubmit />
      </div>
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
