import React, { PureComponent } from 'react';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
import {
  Field,
  reduxForm,
  reset,
} from 'redux-form';
import store from 'Root/store';
import renderMultiSelectField from 'Root/shared/components/form/MultiSelect';
import InputNumber from 'Root/shared/components/mine/InputNumber';
import DateMask from 'Root/shared/components/mine/DateMask';
import { enToFa } from 'Root/mapper';
import RefreshIcon from 'mdi-react/RefreshIcon';
import { connect } from 'react-redux';

const regex = [/[۰-۳]|[0-3]/, /[۰-۹]|[0-9]/, '/', /[۰-۱]|[0-1]/, /[۰-۹]|[0-9]/, '/', /[۰-۹]|[0-9]/, /[۰-۹]|[0-9]/, /[۰-۹]|[0-9]/, /[۰-۹]|[0-9]/]; // eslint-disable-line

class Form extends PureComponent {
  clearFields = () => {
    store.dispatch(reset('SingupUserForm'));
  }

  salam = () => {
    store.dispatch(reset('SingupUserForm'));
  }

  fuckloo = () => {
    store.dispatch(reset('SingupUserForm'));
  }

  render() {
    return (
      <Card className="headfilterRTL">
        <CardBody>
          <Row>
            <Col xs="11">
              <h3 className="filterTitle">
                بخش ثبت نام
              </h3>
            </Col>
            <Col xs="1">
              <RefreshIcon className="genrefreshbut" onClick={this.salam} />
            </Col>
          </Row>
          <form className="form form--vertical widthsad" onSubmit={this.props.handleSubmit}>
            <Row>
              <Col xs="9">
                <Row>
                  <Col xs="2">
                    <img src="bullshit.png" alt="aks karbar" />
                  </Col>
                  <Col xs="5">
                    <div className="form__form-group">
                      <div className="form__form-group-field">
                        <span className="form__form-group-label headFilterBreak">
                          نام:
                        </span>
                        <Field
                          name="firstname"
                          component="input"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="form__form-group">
                      <div className="form__form-group-field">
                        <span className="form__form-group-label headFilterBreak">
                          کد ملی:
                        </span>
                        <Field
                          name="nationalId"
                          component={InputNumber}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs="5">
                    <div className="form__form-group">
                      <div className="form__form-group-field">
                        <span className="form__form-group-label headFilterBreak">
                          نام خانوادگی:
                        </span>
                        <Field
                          name="lastname"
                          component="input"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="form__form-group">
                      <div className="form__form-group-field">
                        <span className="form__form-group-label headFilterBreak">
                          تاریخ تولد:
                        </span>
                        <Field
                          name="birthdayDate"
                          component={DateMask}
                          type="text"
                          mask={regex}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs="7">
                    <div className="form__form-group">
                      <div className="form__form-group-field">
                        <span className="form__form-group-label headFilterBreak">
                          شماره موبایل:
                        </span>
                        <Field
                          name="mobileNumber"
                          component={InputNumber}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs="5">
                    <div className="form__form-group">
                      <div className="form__form-group-field">
                        <span className="form__form-group-label headFilterBreak">
                          تاریخ الان:
                        </span>
                        <Field
                          name="birthdayDate"
                          component={DateMask}
                          type="text"
                          mask={regex}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs="3">
                <img src="A" alt="qr" />
                <p>
                  وضعیت
                </p>
              </Col>
            </Row>
            <Row>
              <div className="liButtonGroup">
                <Button color="success">
                  تایید مشتری
                </Button>
                <Button color="danger" onClick={this.fuckloo}>
                  رد مشتری
                </Button>
              </div>
            </Row>
          </form>
        </CardBody>
      </Card>
    );
  }
}

export default connect(state => ({
  users: state.usersOrgC,
}))(reduxForm({
  form: 'SingupUserForm',
})(Form));
