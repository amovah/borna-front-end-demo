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
            src={props.data.imageBase64}
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
              <p className={this.props.red && 'rednamotabar'}>
                {props.data.firstname || 'نامشخص'}
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
                {(props.data.nationalId && enToFa(props.data.nationalId)) || 'نامشخص'}
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
                {(props.data.mobileNumber && enToFa(props.data.mobileNumber)) || 'نامشخص'}
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
                {props.data.lastname || 'نامشخص'}
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
                {(props.data.birthDate &&
                  enToFa(moment(parseInt(props.data.birthDate, 10)).format('jYYYY/jM/jD HH:mm'))
                ) || 'نامشخص'}
              </p>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  </div>
);
