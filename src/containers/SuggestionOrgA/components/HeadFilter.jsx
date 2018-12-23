import React, { PureComponent } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import {
  Field,
  reduxForm,
} from 'redux-form';
import MaskedInput from 'react-text-mask';
import renderMultiSelectField from 'Root/shared/components/form/MultiSelect';
// import renderCheckBoxField from 'Root/shared/components/form/CheckBox';

const renderField = ({
  input, placeholder, type, mask,
}) => (
  <MaskedInput {...input} placeholder={placeholder} type={type} mask={mask} />
);

class Form extends PureComponent {
  render() {
    return (
      <Card className="headfilterRTL">
        <CardBody>
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
                      component={renderField}
                      type="text"
                      mask={[/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
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
                      component={renderField}
                      type="text"
                      mask={[/[0-3]/, /\d/, '-', /[0-1]/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
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
                      component="input"
                      type="number"
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
                      component="input"
                      type="number"
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
