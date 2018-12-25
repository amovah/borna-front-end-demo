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

const regex = [/[۰-۳]|[0-3]/, /[۰-۹]|[0-9]/, '/', /[۰-۱]|[0-1]/, /[۰-۹]|[0-9]/, '/', /[۰-۹]|[0-9]/, /[۰-۹]|[0-9]/, /[۰-۹]|[0-9]/, /[۰-۹]|[0-9]/]; // eslint-disable-line

class Form extends PureComponent {
  clearFields = () => {
    store.dispatch(reset('ReportGenTokForm'));
  }

  render() {
    return (
      <Card className="headfilterRTL">
        <CardBody>
          <h3 className="filterTitle">
            فیلتر:
          </h3>
          <form className="form form--vertical widthsad" onSubmit={this.props.handleSubmit}>
            <Row>
              <Col xs="4">
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <p>
                      مقدار:
                    </p>
                  </div>
                </div>
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <span className="form__form-group-label headFilterBreak">
                      حداقل:
                    </span>
                    <Field
                      name="startAmount"
                      component={InputNumber}
                    />
                  </div>
                </div>
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <span className="form__form-group-label headFilterBreak">
                      حداکثر
                    </span>
                    <Field
                      name="endAmount"
                      component={InputNumber}
                    />
                  </div>
                </div>
              </Col>

              <Col xs="4">
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <p>
                      تاریخ:
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
              <Col xs="4">
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
                          value: 'موفقیت‌آمیز',
                          label: 'موفقیت‌آمیز',
                        },
                        {
                          value: 'ناموفق',
                          label: 'ناموفق',
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

            <Row>
              <Col xs="4">
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <p>
                      حساب مقصد:
                    </p>
                  </div>
                </div>
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <Field
                      name="destination"
                      component={renderMultiSelectField}
                      options={this.props.users.map(i => ({
                        value: i.id,
                        label: `${i.firstname} ${i.lastname} ${i.nationalId}`,
                      }))}
                    />
                  </div>
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
  form: 'ReportGenTokForm',
})(Form));
