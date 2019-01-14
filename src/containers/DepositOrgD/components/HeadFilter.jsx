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
import loadDeposits from 'Root/redux/actions/userOrgB/loadDeposits';

const regex = [/[۰-۳]|[0-3]/, /[۰-۹]|[0-9]/, '/', /[۰-۱]|[0-1]/, /[۰-۹]|[0-9]/, '/', /[۰-۹]|[0-9]/, /[۰-۹]|[0-9]/, /[۰-۹]|[0-9]/, /[۰-۹]|[0-9]/]; // eslint-disable-line

class Form extends PureComponent {
  clearFields = (e) => {
    e.preventDefault();
    store.dispatch(reset('UserControlForm'));
    loadDeposits();
  }

  render() {
    return (
      <Card className="headfilterRTL">
        <CardBody>
          <div className="alireza-header">
            <Row>
              <Col xs="11">
                <h3 className="filterTitle bold-text">
                  فیلترها
                </h3>
              </Col>
            </Row>
          </div>
          <form className="form form--vertical widthsad" onSubmit={this.props.handleSubmit}>
            <Row>
              <Col xs="3">
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <Row>
                      <Col xs="4">
                        <span className="form__form-group-label headFilterBreak">
                          حداقل تاریخ:
                        </span>
                      </Col>
                      <Col xs="8">
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
                      <Col xs="4">
                        <span className="form__form-group-label headFilterBreak">
                          حداکثر تاریخ:
                        </span>
                      </Col>
                      <Col xs="8">
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
              <Col xs="3">
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <Row>
                      <Col xs="4">
                        <span className="form__form-group-label headFilterBreak">
                          موجودی شروع:
                        </span>
                      </Col>
                      <Col xs="8">
                        <Field
                          name="startDeposit"
                          component={InputNumber}
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
                          موجودی پایان:
                        </span>
                      </Col>
                      <Col xs="8">
                        <Field
                          name="endDeposit"
                          component={InputNumber}
                        />
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>

              <Col xs="3">
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <Row>
                      <Col xs="4">
                        <span className="form__form-group-label headFilterBreak">
                          سود شروع:
                        </span>
                      </Col>
                      <Col xs="8">
                        <Field
                          name="startProfit"
                          component={InputNumber}
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
                          سود پایان:
                        </span>
                      </Col>
                      <Col xs="8">
                        <Field
                          name="endProfit"
                          component={InputNumber}
                        />
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col xs="3">
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <Row>
                      <Col xs="5">
                        <span className="form__form-group-label headFilterBreak">
                          درصد سود شروع:
                        </span>
                      </Col>
                      <Col xs="7">
                        <Field
                          name="startProfitPercent"
                          component={InputNumber}
                        />
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <Row>
                      <Col xs="5">
                        <span className="form__form-group-label headFilterBreak">
                          درصد سود پایان:
                        </span>
                      </Col>
                      <Col xs="7">
                        <Field
                          name="endProfitPercent"
                          component={InputNumber}
                        />
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className="liButtonGroup">
                  <button className="btn btn-primary">
                    جستجو
                  </button>
                  <button className="btn btn-secondary" onClick={this.clearFields}>
                    پاک کردن فیلتر‌ها
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
