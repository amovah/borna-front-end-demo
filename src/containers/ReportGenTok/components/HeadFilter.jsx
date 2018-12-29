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

const regex = [/[۰-۹]|[0-9]/, /[۰-۹]|[0-9]/, /[۰-۹]|[0-9]/, /[۰-۹]|[0-9]/, '/',  /[۰-۱]|[0-1]/, /[۰-۹]|[0-9]/, '/', /[۰-۳]|[0-3]/, /[۰-۹]|[0-9]/] // eslint-disable-line

class Form extends PureComponent {
  clearFields = () => {
    store.dispatch(reset('ReportGenTokForm'));
  }

  render() {
    return (
      <Card className="headfilterRTL">
        <CardBody>
          <div className="alireza-header">
            <Row>
              <Col xs="11">
                <h3 className="filterTitle bold-text">
                  فیلتر
                </h3>
              </Col>
              <Col xs="1">
                <RefreshIcon className="genrefreshbut" onClick={this.salam} />
              </Col>
            </Row>
          </div>
          <form className="form form--vertical widthsad" onSubmit={this.props.handleSubmit}>
            <Row>
              <Col xs="1" />
              <Col xs="10">
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <Row>
                      <Col xs="2">
                        <p>
                          حساب مقصد:
                        </p>
                      </Col>
                      <Col xs="10">
                        <div className="form__form-group-field">
                          <Field
                            name="destination"
                            component={renderMultiSelectField}
                            options={this.props.users.map(i => ({
                              value: i.id,
                                          label: `${i.firstname} ${i.lastname} ${enToFa(i.nationalId)}`,
                            }))}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="4">
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <Row>
                      <Col xs="3">
                        <span className="form__form-group-label headFilterBreak">
                          مقدار حداقل:
                        </span>
                      </Col>
                      <Col xs="9">
                        <Field
                          name="startAmount"
                          component={InputNumber}
                        />
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <Row>
                      <Col xs="3">
                        <span className="form__form-group-label headFilterBreak">
                          مقدار حداکثر
                        </span>
                      </Col>
                      <Col xs="9">
                        <Field
                          name="endAmount"
                          component={InputNumber}
                        />
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>

              <Col xs="4">
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <Row>
                      <Col xs="3">
                        <span className="form__form-group-label headFilterBreak">
                          تاریخ شروع
                        </span>
                      </Col>
                      <Col xs="9">
                        <Field
                          name="startDate"
                          component={DateMask}
                          type="text"
                          mask={regex}
                          placeholder="__/__/____"
                        />
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <Row>
                      <Col xs="3">
                        <span className="form__form-group-label headFilterBreak">
                          تاریخ پایان
                        </span>
                      </Col>
                      <Col xs="9">
                        <Field
                          name="endDate"
                          component={DateMask}
                          mask={regex}
                          type="text"
                          placeholder="__/__/____"
                        />
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col xs="4">
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <Row>
                      <Col xs="3">
                        <span>
                          وضعیت:
                        </span>
                      </Col>
                      <Col xs="9">
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
                      </Col>
                    </Row>

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
  form: 'ReportGenTokForm',
})(Form));
