import React from 'react';
import { Col, Container, Row, Card, CardBody } from 'reactstrap';
import MatTable from './components/MatTable';

const MaterialTable = () => (
  <Container>
    <Row>
      <Col md={12}>
        <div>
          <Card>
            <CardBody>
              <p>Hi THere</p>
            </CardBody>
          </Card>
        </div>
      </Col>
    </Row>
    <Row>
      <MatTable />
    </Row>
  </Container>
);

export default MaterialTable;
