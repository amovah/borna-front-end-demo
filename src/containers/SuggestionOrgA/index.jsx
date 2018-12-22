import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import MatTable from './components/MatTable';
import HeadFilter from './components/HeadFilter';

const showres = (values) => {
  console.log(values);
};

const MaterialTable = () => (
  <Container>
    <Row>
      <Col md={12}>
        <div>
          <HeadFilter onSubmit={showres} />
        </div>
      </Col>
    </Row>
    <Row>
      <MatTable />
    </Row>
  </Container>
);

export default MaterialTable;
