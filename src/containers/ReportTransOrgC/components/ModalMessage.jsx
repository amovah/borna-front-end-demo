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
                <span className="form__form-group-label headFilterBreak">
                  نام:
                </span>
              </Col>
              <Col xs="8">
                <input
                  type="text"
                  disabled
                  value={props.user.firstname}
                />
              </Col>
            </Row>
          </div>
        </div>
        <div className="form__form-group">
          <div className="form__form-group-field">
            <Row>
              <Col xs="4">
                <span className="form__form-group-label headFilterBreak">
                  کد ملی:
                </span>
              </Col>
              <Col xs="8">
                <input
                  type="text"
                  disabled
                  className="ltronly"
                  value={enToFa(props.user.nationalId)}
                />
              </Col>
            </Row>
          </div>
        </div>
        <div className="form__form-group">
          <div className="form__form-group-field">
            <Row>
              <Col xs="4">
                <span className="form__form-group-label headFilterBreak">
                  شماره موبایل:
                </span>
              </Col>
              <Col xs="8">
                <input
                  type="text"
                  disabled
                  className="ltronly"
                  value={enToFa(props.user.mobileNumber)}
                />
              </Col>
            </Row>
          </div>
        </div>
      </Col>
      <Col xs="5">
        <div className="form__form-group">
          <div className="form__form-group-field">
            <Row>
              <Col xs="4">
                <span className="form__form-group-label headFilterBreak">
                  نام خانوادگی:
                </span>
              </Col>
              <Col xs="8">
                <input
                  type="text"
                  disabled
                  value={props.user.lastname}
                />
              </Col>
            </Row>
          </div>
        </div>
        <div className="form__form-group">
          <div className="form__form-group-field">
            <Row>
              <Col xs="4">
                <span className="form__form-group-label headFilterBreak">
                  تاریخ تولد:
                </span>
              </Col>
              <Col xs="8">
                <input
                  type="text"
                  disabled
                  className="ltronly"
                  value={enToFa(moment(parseInt(props.user.birthDate, 10)).format('jYYYY/jM/D HH:mm'))}
                />
              </Col>
            </Row>
          </div>
        </div>

        <div className="form__form-group">
          <div className="form__form-group-field">
            <Row>
              <Col xs="4">
                <span className="form__form-group-label headFilterBreak">
                  وضعیت:
                </span>
              </Col>
              <Col xs="8">
                <input
                  type="text"
                  disabled
                  value={props.user.status}
                />
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);
