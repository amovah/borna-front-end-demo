import React from 'react';
import { Container, Row } from 'reactstrap';
import MatTable from './components/MatTable';
import HeadFilter from './components/HeadFilter';
import filterTokens from 'Root/redux/actions/userOrgC/filterTokens';

const MaterialTable = () => (
  <Container>
    <div>
      <HeadFilter onSubmit={filterTokens} />
    </div>
    <Row>
      <MatTable />
    </Row>
  </Container>
);

export default MaterialTable;
