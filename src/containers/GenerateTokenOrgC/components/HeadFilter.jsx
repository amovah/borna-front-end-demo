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
    store.dispatch(reset('generateTokenOrgC'));
  }

  render() {
    return (
      <Card className="headfilterRTL">
        <CardBody>
          <h3 className="filterTitle">
            بخش تولید توکن:
          </h3>
          <form className="form form--vertical widthsad" onSubmit={this.props.handleSubmit}>
            <Row>
              <Col xs="4">
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <p>
                      به:
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
                          value: 'در حال نمایش',
                          label: 'در حال نمایش',
                        },
                        {
                          value: 'گزارش شده',
                          label: 'گزارش شده',
                        },
                      ]}
                    />
                  </div>
                </div>
              </Col>

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
                    <Field
                      name="meqdar"
                      component={InputNumber}
                    />
                  </div>
                </div>
              </Col>

              <Col xs="4">
                <div className="liButtonGroup">
                  <button className="btn btn-primary">
                    انتقال
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

export default reduxForm({
  form: 'generateTokenOrgC',
})(Form);
