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

const regex = [/[۰-۳]|[0-3]/, /[۰-۹]|[0-9]/, '/', /[۰-۱]|[0-1]/, /[۰-۹]|[0-9]/, '/', /[۰-۹]|[0-9]/, /[۰-۹]|[0-9]/, /[۰-۹]|[0-9]/, /[۰-۹]|[0-9]/]; // eslint-disable-line

class Form extends PureComponent {
  clearFields = () => {
    store.dispatch(reset('suggestionOrgA'));
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
                        { value: 'one', label: 'One' },
                        { value: 'two', label: 'Two' },
                      ]}
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
                  <span className="form__form-group-label">
                    شروع
                    (روز-ماه-سال)
                  </span>
                  <div className="form__form-group-field">
                    <Field
                      name="startDate"
                      component={DateMask}
                      type="text"
                      mask={regex}
                    />
                  </div>
                </div>
                <div className="form__form-group">
                  <span className="form__form-group-label">
                    پایان
                    (روز-ماه-سال)
                  </span>
                  <div className="form__form-group-field">
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
                      تعداد لایک:
                    </p>
                  </div>
                </div>
                <div className="form__form-group">
                  <span className="form__form-group-label">
                    شروع
                  </span>
                  <div className="form__form-group-field">
                    <Field
                      name="startLike"
                      component={InputNumber}
                    />
                  </div>
                </div>
                <div className="form__form-group">
                  <span className="form__form-group-label">
                    پایان
                  </span>
                  <div className="form__form-group-field">
                    <Field
                      name="endLike"
                      component={InputNumber}
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <div className="liButtonGroup">
              <button className="btn btn-primary">
                ثبت فیلتر
              </button>
              <button className="btn btn-secondary" onClick={this.clearFields}>
                پاک کردن فیلتر ها
              </button>
            </div>
          </form>
        </CardBody>
      </Card>
    );
  }
}

export default reduxForm({
  form: 'suggestionOrgA',
})(Form);
