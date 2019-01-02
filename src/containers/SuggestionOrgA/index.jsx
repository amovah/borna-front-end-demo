import React from 'react';
import { Container, Row } from 'reactstrap';
import MatTable from './components/MatTable';
import HeadFilter from './components/HeadFilter';
import filterSug from 'Root/redux/actions/userOrgC/filterSug';

const MaterialTable = () => (
  <Container>
    <div>
      <HeadFilter onSubmit={filterSug} />
    </div>
    <Row>
      <MatTable />
    </Row>
  </Container>
);

export default MaterialTable;
