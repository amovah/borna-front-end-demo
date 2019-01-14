import React from 'react';
import { Container, Row } from 'reactstrap';
// import MatTable from './components/MatTable';
import HeadFilter from './components/HeadFilter';
import store from 'Root/store';
import fetch from 'Root/fetch';
import generateQR from 'Root/redux/actions/userOrgD/generateQR';
import startPolling from 'Root/redux/actions/userOrgD/startPolling';
import config from 'Root/config';
import { reset, change } from 'redux-form';
import { enToFa } from 'Root/mapper';
import moment from 'Root/moment';

const showres = (values) => {
  store.dispatch(reset('SingupUserFormB'));
  global.fuckStateB({
    disabled: true,
  });

  fetch({
    url: `${config.server}/orgB/${global.fuckDataB.issuerId}/clientControl/${global.fuckDataB.id}`,
    options: {
      method: 'PUT',
    },
    query: {
      operation: 'approved',
    },
  });

  generateQR(() => startPolling((data) => {
    global.fuckStateB({
      disabled: false,
    });

    store.dispatch(change('SingupUserFormB', 'avatar', data.imageBase64));
    store.dispatch(change('SingupUserFormB', 'firstname', data.firstname));
    store.dispatch(change('SingupUserFormB', 'lastname', data.lastname));
    store.dispatch(change('SingupUserFormB', 'nationalId', enToFa(data.nationalId)));
    store.dispatch(change('SingupUserFormB', 'mobileNumber', enToFa(data.mobileNumber)));
    store.dispatch(change('SingupUserFormB', 'birthDate', enToFa(moment(parseInt(data.birthDate, 10)).format('jYYYY/jM/jD HH:mm')))); // eslint-disable-line

    global.fuckDataB = data;
  }));
};

const MaterialTable = () => (
  <Container>
    <div>
      <HeadFilter onSubmit={showres} />
    </div>
  </Container>
);

export default MaterialTable;
