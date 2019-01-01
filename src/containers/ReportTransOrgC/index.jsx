import React from 'react';
import { Container, Row } from 'reactstrap';
import MatTable from './components/MatTable';
import HeadFilter from './components/HeadFilter';
import filterTrans from 'Root/redux/actions/userOrgC/filterTrans';

const MaterialTable = () => (
  <Container>
    <div>
      <HeadFilter onSubmit={filterTrans} />
    </div>
    <Row>
      <MatTable />
    </Row>
  </Container>
);

export default MaterialTable;
