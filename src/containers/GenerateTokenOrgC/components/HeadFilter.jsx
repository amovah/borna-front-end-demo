import React, { PureComponent } from 'react';
import { Row, Col, Card, CardBody, Button, CardTitle } from 'reactstrap';
import {
  Field,
  reduxForm,
  reset,
} from 'redux-form';
import store from 'Root/store';
import renderMultiSelectField from 'Root/shared/components/form/Select';
import InputNumber from 'Root/shared/components/mine/InputNumber';
import DateMask from 'Root/shared/components/mine/DateMask';
import { enToFa } from 'Root/mapper';
import RefreshIcon from 'mdi-react/RefreshIcon';
import { connect } from 'react-redux';

const regex = [/[۰-۳]|[0-3]/, /[۰-۹]|[0-9]/, '/', /[۰-۱]|[0-1]/, /[۰-۹]|[0-9]/, '/', /[۰-۹]|[0-9]/, /[۰-۹]|[0-9]/, /[۰-۹]|[0-9]/, /[۰-۹]|[0-9]/]; // eslint-disable-line

class Form extends PureComponent {
  clearFields = () => {
    store.dispatch(reset('generateTokenOrgC'));
  }

  salam = () => {
    store.dispatch(reset('generateTokenOrgC'));
  }

  render() {
    return (
      <Card className="headfilterRTL">
        <CardBody>
          <div className="alireza-header">
            <Row>
              <Col xs="11">
                <h3 className="filterTitle bold-text">
                  تولید توکن
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
              <Col xs="6">
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <p>
                      به حساب کاربر:
                    </p>
                  </div>
                </div>
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <Field
                      name="to"
                      component={renderMultiSelectField}
                      options={this.props.users.map(i => ({
                        value: i.id,
                        label: `${i.firstname} ${i.lastname} ${enToFa(i.nationalId)}`,
                      }))}
                    />
                  </div>
                </div>
              </Col>

              <Col xs="2">
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
                      name="value"
                      component={InputNumber}
                    />
                  </div>
                </div>
              </Col>

              <Col xs="2" className="rightaligngen">
                <div className="liButtonGroup gentokenshitty">
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

export default connect(state => ({
  users: state.usersOrgC,
}))(reduxForm({
  form: 'generateTokenOrgC',
})(Form));
