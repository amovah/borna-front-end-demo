import React from 'react';
import { Container, Row } from 'reactstrap';
import MatTable from './components/MatTable';
import HeadFilter from './components/HeadFilter';
import filterDeposits from 'Root/redux/actions/userOrgD/filterDeposits';

const MaterialTable = () => (
  <Container>
    <div>
      <HeadFilter onSubmit={filterDeposits} />
    </div>
    <Row>
      <MatTable />
    </Row>
  </Container>
);

export default MaterialTable;
