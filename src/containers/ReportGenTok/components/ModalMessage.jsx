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
            src={props.user.imageBase64}
            alt="عکس کاربر"
          />
        </div>
      </Col>
      <Col xs="5">
        <div className="form__form-group">
          <div className="form__form-group-field">
            <Row>
              <Col xs="4">
                <p className="form__form-group-label headFilterBreak">
                  نام:
                </p>
              </Col>
              <Col xs="8">
                <p>
                  {props.user.firstname}
                </p>
              </Col>
            </Row>
          </div>
        </div>
        <div className="form__form-group">
          <div className="form__form-group-field">
            <Row>
              <Col xs="6">
                <p className="form__form-group-label headFilterBreak">
                  کد ملی:
                </p>
              </Col>
              <Col xs="6">
                <p>
                  {enToFa(props.user.nationalId)}
                </p>
              </Col>
            </Row>
          </div>
        </div>
        <div className="form__form-group">
          <div className="form__form-group-field">
            <Row>
              <Col xs="6">
                <p className="form__form-group-label headFilterBreak">
                  شماره موبایل:
                </p>
              </Col>
              <Col xs="6">
                <p>
                  {enToFa(props.user.mobileNumber)}
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
      <Col xs="5">
        <div className="form__form-group">
          <div className="form__form-group-field">
            <Row>
              <Col xs="6">
                <p className="form__form-group-label headFilterBreak">
                  نام خانوادگی:
                </p>
              </Col>
              <Col xs="6">
                <p>
                  {props.user.lastname}
                </p>
              </Col>
            </Row>
          </div>
        </div>
        <div className="form__form-group">
          <div className="form__form-group-field">
            <Row>
              <Col xs="6">
                <p className="form__form-group-label headFilterBreak">
                  تاریخ تولد:
                </p>
              </Col>
              <Col xs="6">
                <p>
                  {enToFa(moment(parseInt(props.user.birthDate, 10)).format('jYYYY/jM/D HH:mm'))}
                </p>
              </Col>
            </Row>
          </div>
        </div>

        <div className="form__form-group">
          <div className="form__form-group-field">
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
        </div>
      </Col>
    </Row>
  </div>
);
