import React, { PureComponent } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import {
  Field,
  reduxForm,
} from 'redux-form';
import renderMultiSelectField from 'Root/shared/components/form/MultiSelect';
import InputNumber from 'Root/shared/components/mine/InputNumber';
import DateMask from 'Root/shared/components/mine/DateMask';
import { enToFa } from 'Root/mapper';

class Form extends PureComponent {
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
                      name="multi_select"
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
                      mask={[/[۰-۳]/, /[۰-۹]/, '-', /[۰-۱]/, /[۰-۹]/, '-', /[۰-۹]/, /[۰-۹]/, /[۰-۹]/, /[۰-۹]/]}
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
                      mask={[/[۰-۳]/, /[۰-۹]/, '-', /[۰-۱]/, /[۰-۹]/, '-', /[۰-۹]/, /[۰-۹]/, /[۰-۹]/, /[۰-۹]/]}
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
            <button className="btn btn-primary">
              ثبت فیلتر
            </button>
          </form>
        </CardBody>
      </Card>
    );
  }
}

export default reduxForm({
  form: 'suggestionOrgA',
})(Form);
