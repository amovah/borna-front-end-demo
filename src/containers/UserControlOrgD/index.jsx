import React from 'react';
import { Container, Row } from 'reactstrap';
import MatTable from './components/MatTable';
import HeadFilter from './components/HeadFilter';
import filterControl from 'Root/redux/actions/userOrgD/filterControl';

const MaterialTable = () => (
  <Container>
    <div>
      <HeadFilter onSubmit={filterControl} />
    </div>
    <Row>
      <MatTable />
    </Row>
  </Container>
);

export default MaterialTable;
