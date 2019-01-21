import React from 'react';
import LogInForm from './components/LogInForm';
import loginAction from 'Root/redux/actions/userOrgA/login';
import generateQR from 'Root/redux/actions/userOrgA/generateQR';
import store from 'Root/store';
import { reset, submit, change } from 'redux-form';
import startPolling from 'Root/redux/actions/userOrgA/startPolling';
import openModal from 'Root/redux/actions/modal/open';
import closeModal from 'Root/redux/actions/modal/close';
import ModalMessage from './components/ModalMessage';
import { Button } from 'reactstrap';

const onSubmit = () => {
  generateQR(() => startPolling((data) => {
    let red = false;
    if (data.status === 'نامعتبر') {
      red = true;
    }
    openModal({
      color: 'success',
      message: <ModalMessage data={data} red={red} />,
      buttons: [
        <Button onClick={closeModal}>بستن</Button>,
      ],
      close() {
        closeModal();
      },
      large: true,
    });
  }));
};

const LogIn = () => (
  <div className="account">
    <LogInForm onSubmit={onSubmit} />
    <div className="version-indicator-in-login-page">
      <p>
        ورژن ۱.۰.۰
      </p>
    </div>

    <div className="heythere-indicator-in-login-page">
      <p>
        برنا، بستر نوین اعتماد
      </p>
    </div>
  </div>
);

export default LogIn;

// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles
