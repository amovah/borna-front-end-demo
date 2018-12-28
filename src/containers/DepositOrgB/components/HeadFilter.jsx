import React, { PureComponent } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
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
import { connect } from 'react-redux';
import RefreshIcon from 'mdi-react/RefreshIcon';

const regex = [/[۰-۳]|[0-3]/, /[۰-۹]|[0-9]/, '/', /[۰-۱]|[0-1]/, /[۰-۹]|[0-9]/, '/', /[۰-۹]|[0-9]/, /[۰-۹]|[0-9]/, /[۰-۹]|[0-9]/, /[۰-۹]|[0-9]/]; // eslint-disable-line

class Form extends PureComponent {
  clearFields = () => {
    store.dispatch(reset('UserControlForm'));
  }

  render() {
    return (
      <Card className="headfilterRTL">
        <CardBody>
          <Row>
            <Col xs="11">
              <h3 className="filterTitle">
                فیلتر؛
              </h3>
            </Col>
          </Row>
          <form className="form form--vertical widthsad" onSubmit={this.props.handleSubmit}>
            <Row>
              <Col xs="3">
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
                      نام خانوادگی:
                    </span>
                    <Field
                      name="lastname"
                      component="input"
                      type="text"
                    />
                  </div>
                </div>
              </Col>
              <Col xs="3">
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <span className="form__form-group-label headFilterBreak">
                      شماره ملی:
                    </span>
                    <Field
                      name="nationalId"
                      component={InputNumber}
                    />
                  </div>
                </div>
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

              <Col xs="3">
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <p>
                      تاریخ تولد:
                    </p>
                  </div>
                </div>
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <span className="form__form-group-label headFilterBreak">
                      شروع
                      (روز-ماه-سال)
                    </span>
                    <Field
                      name="startDate"
                      component={DateMask}
                      type="text"
                      mask={regex}
                    />
                  </div>
                </div>
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <span className="form__form-group-label headFilterBreak">
                      پایان
                      (روز-ماه-سال)
                    </span>
                    <Field
                      name="endDate"
                      component={DateMask}
                      mask={regex}
                      type="text"
                    />
                  </div>
                </div>
              </Col>
              <Col xs="3">
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <p>
                      وضعیت:
                    </p>
                  </div>
                </div>
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <Field
                      name="status"
                      component={renderMultiSelectField}
                      options={[
                        {
                          value: 'در دسترس',
                          label: 'در دسترس',
                        },
                        {
                          value: 'توقیف شده',
                          label: 'توقیف شده',
                        },
                      ]}
                    />
                  </div>
                </div>
                <div className="liButtonGroup">
                  <button className="btn btn-primary">
                    ثبت فیلتر
                  </button>
                  <button className="btn btn-secondary" onClick={this.clearFields}>
                    پاک کردن فیلتر ها
                  </button>
                </div>
              </Col>
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
  form: 'UserControlForm',
})(Form));
