import React from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import DefaultUser from 'Root/shared/img/defaultUser.png';
import { enToFa } from 'Root/mapper';
import moment from 'Root/moment';

export default props => (
  <div>
    <Row>
      <Col xs="2">
        <div className="user-modal-image">
          <img
            src={DefaultUser}
            alt="عکس کاربر"
          />
        </div>
      </Col>
      <Col xs="5">
        <div className="form__form-group">
          <Row>
            <Col xs="4">
              <p className="form__form-group-label headFilterBreak">
                نام:
              </p>
            </Col>
            <Col xs="8">
              <p>
                {props.user.firstname.slice(0, 10)}
              </p>
            </Col>
          </Row>
        </div>
        <div className="form__form-group">
          <Row>
            <Col xs="4">
              <p className="form__form-group-label headFilterBreak">
                کد ملی:
              </p>
            </Col>
            <Col xs="8">
              <p>
                {props.user.nationalId.slice(0, 10)}
              </p>
            </Col>
          </Row>
        </div>
        <div className="form__form-group">
          <Row>
            <Col xs="4">
              <p className="form__form-group-label headFilterBreak">
                شماره موبایل:
              </p>
            </Col>
            <Col xs="8">
              <p>
                {props.user.mobileNumber.slice(0, 10)}
              </p>
            </Col>
          </Row>
        </div>
      </Col>
      <Col xs="5">
        <div className="form__form-group">
          <Row>
            <Col xs="4">
              <p className="form__form-group-label headFilterBreak">
                نام خانوادگی:
              </p>
            </Col>
            <Col xs="8">
              <p>
                {props.user.lastname.slice(0, 10)}
              </p>
            </Col>
          </Row>
        </div>
        <div className="form__form-group">
          <Row>
            <Col xs="4">
              <p className="form__form-group-label headFilterBreak">
                تاریخ تولد:
              </p>
            </Col>
            <Col xs="8">
              <p>
                {props.user.birthDate.slice(0, 10)}
              </p>
            </Col>
          </Row>
        </div>

        <div className="form__form-group">
          <Row>
            <Col xs="4">
              <p className="form__form-group-label headFilterBreak">
                وضعیت:
              </p>
            </Col>
            <Col xs="8">
              <p>
                {props.user.status}
              </p>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  </div>
);
