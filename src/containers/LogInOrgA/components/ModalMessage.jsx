import React from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import DefaultUser from 'Root/shared/img/defaultUser.png';


export default props => (
  <div>
    <Row>
      <Col xs="2">
        <div className="user-modal-image">
          <img
            src={DefaultUser}
            alt="salam"
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
                  value="تست"
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
                  value="تست"
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
                />
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);
