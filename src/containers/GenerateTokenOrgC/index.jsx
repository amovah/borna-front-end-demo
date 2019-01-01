import React from 'react';
import { Container, Row } from 'reactstrap';
import HeadFilter from './components/HeadFilter';
import issueToken from 'Root/redux/actions/userOrgC/issueToken';

const MaterialTable = () => (
  <Container>
    <div>
      <HeadFilter onSubmit={issueToken} />
    </div>
  </Container>
);

export default MaterialTable;
