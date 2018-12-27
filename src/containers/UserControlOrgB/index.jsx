import React from 'react';
import { Container, Row } from 'reactstrap';
import MatTable from './components/MatTable';
import HeadFilter from './components/HeadFilter';

const showres = (values) => {
  console.log(values);
};

const MaterialTable = () => (
  <Container>
    <div>
      <HeadFilter onSubmit={showres} />
    </div>
    <Row>
      <MatTable />
    </Row>
  </Container>
);

export default MaterialTable;
