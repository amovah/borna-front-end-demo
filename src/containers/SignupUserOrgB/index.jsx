import React from 'react';
import { Container, Row } from 'reactstrap';
// import MatTable from './components/MatTable';
import HeadFilter from './components/HeadFilter';
import store from 'Root/store';
import fetch from 'Root/fetch';
import generateQR from 'Root/redux/actions/userOrgB/generateQR';
import startPolling from 'Root/redux/actions/userOrgB/startPolling';
import config from 'Root/config';
import { reset, change } from 'redux-form';
import { enToFa } from 'Root/mapper';
import moment from 'Root/moment';

const showres = async (values) => {
  store.dispatch(reset('SingupUserForm'));
  global.fuckState({
    disabled: true,
  });

  const token = store.getState().userOrgB.token;
  await fetch({
    url: `${config.server}/orgB/${global.fuckData.issuerId}/clientControl/${global.fuckData.id}`,
    options: {
      method: 'PUT',
    },
    query: {
      operation: 'approved',
    },
    token,
  });

  generateQR(() => startPolling((data) => {
    global.fuckState({
      disabled: false,
    });

    store.dispatch(change('SingupUserForm', 'avatar', data.imageBase64));
    store.dispatch(change('SingupUserForm', 'firstname', data.firstname));
    store.dispatch(change('SingupUserForm', 'lastname', data.lastname));
    store.dispatch(change('SingupUserForm', 'nationalId', enToFa(data.nationalId)));
    store.dispatch(change('SingupUserForm', 'mobileNumber', enToFa(data.mobileNumber)));
    store.dispatch(change('SingupUserForm', 'birthDate', enToFa(moment(parseInt(data.birthDate, 10)).format('jYYYY/jM/jD HH:mm')))); // eslint-disable-line

    global.fuckData = data;
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
